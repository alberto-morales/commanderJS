	
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

	var apiRouter = commanderAPI.router();
	
	app.use(apiRouter);

	// Start server
	app.listen(appSettings.port, function() {		
		 console.log('Node server running on http://localhost:'+appSettings.port);
	});
