const router = require('express').Router();

//ROUTES GO HERE

router.get('/test', (req, res) => {
	res.send("Hello from test")
});

module.exports=router;