const router = require(express).Router();

//ROUTES GO HERE

router.get('/', (req, res) => {
	res.status.sendFile('index.html');
});

module.exports=router;