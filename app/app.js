var appSettings = require('./util/settings');

var express = require('express');

// var bodyParser = require('body-parser');
//var methodOverride = require("method-override");
var app = express();

var commanderAPI = require('./api/commander-api');

// Middlewares
//app.use(bodyParser.urlencoded({ extended: false })); 
//app.use(bodyParser.json()); 
//app.use(methodOverride());

var router = express.Router();

app.use(function (req, res, next) {
	  console.log('antes 1');
	  next();
	  console.log('despues 1');
	});

app.use(function (req, res, next) {
	  console.log('antes 2');
	  next();
	  console.log('despues 2');
	});

// Index
router.get('/', function(req, res) { 
	console.log('esto es el hola mundo');
	res.send('Hola Mundo - albertomorales.eu');
});

app.use(router);

// Start server
	app.listen(appSettings.port, function() {		
		 console.log('Node server running on http://localhost:'+appSettings.port);
	});