const router = require("express").Router();
const pgp = require("pg-promise")();

let connection;

if (process.env.DATABASE_URL) {
  // https://docs.run.pivotal.io/devguide/deploy-apps/environment-variable.html#DATABASE-URL
  connection = process.env.DATABASE_URL;
} else {
  connection = {
    host: "localhost",
    port: 5432,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
  };
}

const db = pgp(connection);

//ROUTES GO HERE
router.get("/resources", (req, res) => {
  // TO DO: return resources with categories list instead of just resources info. If so, delete categories-and-resource-id route.
  db
    .any(`SELECT * FROM resources`)
    .then(data => {
      res.json(data);
    })
    .catch(error => res.json({ error: error.message }));
});

router.get("/categories", (req, res) => {
  db
    .any(`SELECT category_name FROM categories`)
    .then(data => res.json(data))
    .catch(error => res.json({ error: error.message }));
});

router.get("/categories-and-resource-id", (req, res) => {
  db
    .any(
      `SELECT resources_categories.resource_id, categories.id, categories.category_name
  FROM resources_categories
  JOIN categories ON categories.id = resources_categories.category_id`
    )
    .then(data => res.json(data))
    .catch(error => res.json({ error: error.message }));
});

router.post("/resources", (req, res) => {
  const resourceCat = req.body.categories;
  const { title, description, url, num_of_votes, resource_type } = req.body;
  let newResource;
  db
    .tx(t => {
      return t
        .one(
          `INSERT INTO resources (title, description, url, num_of_votes, resource_type) VALUES($1, $2, $3, $4, $5) RETURNING *`,
          [title, description, url, num_of_votes, resource_type]
        )
        .then(resource => {
          newResource = {
            id: resource.id,
            title: resource.title,
            description: resource.description,
            url: resource.url,
            num_of_votes: resource.num_of_votes,
            resource_type: resource.resource_type,
            categories: resourceCat
          };
          let queries = resourceCat.map(item => {
            return t
              .one(`SELECT id FROM categories WHERE category_name = $1`, item)
              .then(category => {
                return t.none(
                  `INSERT INTO resources_categories (resource_id, category_id) VALUES ($1, $2)`,
                  [resource.id, category.id]
                );
              });
          });
          return t.batch([
            {
              queries: queries
            },
            { data: newResource }
          ]);
        });
    })
    .then(data => {
      res.json(Object.assign({}, { id: data[1].id }, req.body));
    })
    .catch(error => {
      res.json({
        error: error.message
      });
    });
});

router.post("/add-vote", (req, res) => {
  const { id, votes } = req.body;
  db
    .any(`UPDATE resources SET num_of_votes = $1 WHERE id = $2`, [votes, id])
    .then(data => res.json(data))
    .catch(error => {
      res.json({
        error: error.message
      });
    });
});

router.get("/categories/:categoryName", (req, res) => {
  const searchCategory = req.params.categoryName;
  db
    .any(
      `SELECT resources.id, resources.title, resources.description, resources.url, resources.resource_type, resources.num_of_votes, categories.category_name
        FROM resources_categories
        JOIN resources ON resources.id = resources_categories.resource_id
        JOIN categories ON categories.id = resources_categories.category_id
        WHERE category_name = $1`,
      searchCategory
    )
    .then(data => res.json(data))
    .catch(error => res.json({ error: error.message }));
});

module.exports = router;
