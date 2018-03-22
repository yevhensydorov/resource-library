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
})

router.get('/test', (req, res) => {
	res.send("Hello from test")
});

module.exports=router;