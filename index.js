const SERVER_PORT = process.env.PORT || 7000;

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./BE/routers/router');
var path = require('path')
const app = express();
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static('BE/public'));

// app.use(express.static(path.join(__dirname, 'BE/public')));


// app.get('/*', function (req, res) {
//     res.status(200).sendFile(__dirname+'/BE/public/index.html');
// });

 app.get('/', (req, res) => {
 	res.status.sendFile('index.html');
 });
 app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'BE/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.listen(SERVER_PORT, () => {
  console.info(`Server started at http://localhost:${SERVER_PORT}`);
});
