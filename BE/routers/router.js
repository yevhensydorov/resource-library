const router = require('express').Router();
const pgp = require('pg-promise')();


const db = pgp({
	host: 'localhost',
	port: 5432,
	database: process.env.DATABASE,
	user: process.env.USERNAME,
	password: process.env.PASSWORD
});


//ROUTES GO HERE
router.get('/resources', (req, res) => {
	db.any(`SELECT * FROM resources`)
		.then(data => res.json(data))
		.catch(error => res.json({error: error.message}))
});

router.post('/resources', (req, res) => {
	const {title, description, url} = req.body;
	db.any(`INSERT INTO resources (title, description, url) VALUES($1, $2, $3) RETURNING id`, [title, description, url])
		.then(data => {
			res.json(Object.assign({}, {id: data.id}, req.body));
		})
		.catch(error => {
			res.json({
				error: error.message
			});
		});
});


module.exports=router;