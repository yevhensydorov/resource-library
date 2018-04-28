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
  db
    .any(
      `SELECT * FROM resources`
    )
    .then(data => res.json(data))
    .catch(error => res.json({ error: error.message }));
});

router.get('/categories-and-resource-id', (req, res) => {
  db.any(`SELECT resources_categories.resource_id, categories.id, categories.category_name
  FROM resources_categories
  JOIN categories ON categories.id = resources_categories.category_id`)
  .then(data => res.json(data))
  .catch(error => res.json({ error: error.message }));
});

router.post("/resources", (req, res) => {
  const { title, description, url } = req.body;
  db
    .any(
      `INSERT INTO resources (title, description, url) VALUES($1, $2, $3) RETURNING id`,
      [title, description, url]
    )
    .then(data => {
      res.json(Object.assign({}, { id: data.id }, req.body));
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
      `SELECT resources.title, resources.description, resources.url, resources.num_of_votes, categories.category_name
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
