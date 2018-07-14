var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('hello world'));


var server = app.listen(8081, _ => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("访问地址: http://%s:%s", host, port);
});
