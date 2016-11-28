'use strict';

(function() {
	
	var express = require('express');
	var router = express.Router();
	
	var catalog = require('../model/catalog');
	
	// middleware that is specific to this router
	router.use(function timeLog (req, res, next) {
		console.log('Time: ', Date.now())
		if (catalog.isLoading) {
			res.send('Catalog still loading!!!');
		} else {
			console.log(req.originalUrl);
			next();
		}
	});
	
	var apiController = require('./controller.js');
	router.route('/catalogs/reload').get(apiController.reloadCatalogs);
	router.route('/servers').get(apiController.getServers);
	router.route('/servers/:id').get(apiController.getServer);
	router.route('/servers/:id/status').get(apiController.getServerStatus);
	router.route('/servers/:id/version').get(apiController.getServerVersion);
	router.route('/servers/:id/start').get(apiController.startServer);
	router.route('/servers/:id/stop').get(apiController.stopServer);
	router.route('/environments').get(apiController.getEnvironments);
	router.route('/environments/:id').get(apiController.getEnvironment);
	router.route('/environments/:id/status').get(apiController.getEnvironmentStatus);
	router.route('/environments/:id/schema').get(apiController.getEnvironmentSchema);
	router.route('/environments/:id/start').get(apiController.startEnvironment);
	router.route('/environments/:id/stop').get(apiController.stopEnvironment);
	router.route('/projects').get(apiController.getProjects);
	
	module.exports = router;
	
})();
