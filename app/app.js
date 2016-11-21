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
	console.log("esto es el hola mundo");
	var server = new commanderAPI.Server('s1','server 1');
	if (server) {
		console.log("SI tenemos server");		
	} else {
		console.log("no tenemos server");
	}
	var environment = new commanderAPI.Environment('e1','environment 1');
	if (environment) {
		console.log("SI tenemos environment");		
	} else {
		console.log("no tenemos environment");
	}
	var project = new commanderAPI.Project('p1','project 1');
	if (project) {
		console.log("SI tenemos project");		
	} else {
		console.log("no tenemos project");
	}
	server.escribe();
	environment.escribe();
	project.escribe();
	console.log(project.id);
	res.send("Hola Mundo - albertomorales.eu");
});

app.use(router);

// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});