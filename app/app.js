	// var bodyParser = require('body-parser');
	//var methodOverride = require("method-override");
	// Middlewares
	//app.use(bodyParser.urlencoded({ extended: false })); 
	//app.use(bodyParser.json()); 
	//app.use(methodOverride());

	var appSettings = require('./util/settings');
	var express = require('express');
	var app = express();
	var cors = require('cors');
	var corsOptions = {
		  "origin": "*",
		  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
		  "preflightContinue": false,
		  "optionsSuccessStatus" : 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
		};
	app.use(cors(corsOptions));
		
	var router = express.Router();
	router.get('/', function(req, res) { 
		 res.send("Welcome to Commander API v.0.0.1");
	});
	app.use(router);
	
	var commanderAPI = require('./api/commander-api');
	var apirouter = commanderAPI.router();
	app.use('/rest', apirouter);

	// Start server
	app.listen(appSettings.port, function() {		
		 console.log('Node server running on http://localhost:'+appSettings.port);
	});
