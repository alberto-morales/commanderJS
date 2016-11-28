'use strict';

(function() {
	
	var express = require('express');
	var router = express.Router();
	
	var catalog = require('../model/catalog');
	catalog.reload();
	
	// middleware that is specific to this router
	router.use(function timeLog (req, res, next) {
		console.log('Time: ', Date.now())
		if (catalog.isLoading) {
			res.send('Catalog still loading!!!');
		} else {
			next();
		}
	});
	
	// define the home page route
	router.get('/', function (req, res) {
		res.send('Hello world')
	});
	
	// define the about route
	router.get('/about', function (req, res) {
		res.send('About me!');
	});
	
	// define the servers route
	router.get('/servers', function (req, res) {
		res.send('hay '+catalog.serverDefs().length+' servers');
	})	
	
	// define the environments route
	router.get('/environments', function (req, res) {
		res.send('hay '+catalog.environmentDefs().length+' environments');
	})	
	
	// define the projects route
	router.get('/projects', function (req, res) {
		res.send('hay '+catalog.projectDefs().length+' projects');
	})	
	
	module.exports = router;
	
})();
