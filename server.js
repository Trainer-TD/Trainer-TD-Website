var express = require('express');
var app = express();
var path = require('path');

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname)));
app.use("/public", express.static(__dirname + '/public'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// add other routes below
// app.get('/about', function (req, res) {
//   res.sendFile(path.join(__dirname + 'views/about.html'));
// });

app.listen(port, () => {
    console.log(`App running in port ${port}`);
});