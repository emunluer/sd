/*var http = require('http');
var fs = require('fs');var index = fs.readFileSync('client/index.html');
var index = fs.readFileSync('client/index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(9615);
*/


/*
- npm install typescript -g
- npm install express -g
- npm install to install the dependencies as well (into the projects node_modules folder)
- dont forget setting shortcut node to nodejs ( to the projet foldeR)
- npm install @types/node --save-dev
*/


var path = require('path');
var express = require('express');
var app = express();

//var x = require('mongoose');

let staticPath = path.join(__dirname, '/client');
app.use('/', express.static(staticPath));
app.listen(3000, function() { console.log('listening')});
