/*var http = require('http');
var fs = require('fs');var index = fs.readFileSync('client/index.html');
var index = fs.readFileSync('client/index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(9615);
*/


/*
- install nodejs and npm from apt-get
- install git from apt-get and config
	  git config --global user.name emunluer
	  git config --global user.email emunluer@gmail.com
    git remote add origin https://github.com/emunluer/sd.git
    a

- npm install typescript -g (make it global since this is a command line utility)
- npm install express -g (dont do this, why do gloally , this should goto a project folder !)
- create project folder
- do npm init ( which will create package.json)
- npm install express --save (so that it goes to package.json dependencies)
- npm install @types/node --save
- do shortcut node to nodejs ( to the project foldeR so that you can launch nodejs on debug)

*/


//test

var path = require('path');
var express = require('express');
var app = express();

//var x = require('mongoose');

let staticPath = path.join(__dirname, '/client');
app.use('/', express.static(staticPath));
app.listen(3000, function() { console.log('listening')});
