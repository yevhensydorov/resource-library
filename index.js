const SERVER_PORT = process.env.PORT || 7000;

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./BE/routers/router');

const app = express();
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static('BE/public'));


app.get('/', (req, res) => {
	res.status.sendFile('index.html');
});

app.listen(SERVER_PORT, () => {
  console.info(`Server started at http://localhost:${SERVER_PORT}`);
});
