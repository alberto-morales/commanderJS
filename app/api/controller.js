'use strict';

(function() {
	
	var serverBuilder = require('./serverBuilder');
	var environmentBuilder = require('./environmentBuilder');
	var projectBuilder = require('./projectBuilder');
	
	var Server = require('../model/server');
	
	var catalog = require('../model/catalog');
	catalog.reload(); // <<== OJITO, está aki el catalog.reload!!!!
	
	module.exports.reloadCatalogs = function(req, res) {
		console.log("reloadCatalogs");
		catalog.reload();
		res.send("Servers, environments and projects definition file reloaded");
	}
	
	module.exports.getServers = function(req, res) {
		console.log("getServers");
		var serverDefs = catalog.serverDefs();
		var servers = [];
		for (var i = 0; i < serverDefs.length; i++) {
			var serverDef = serverDefs[i];
			var server = new Server(serverDef);
			servers.push(server);
		}
		serverBuilder.build(servers,
							function(result) {
								res.send(JSON.stringify(result,['id', 
								                                'description', 
								                                'address', 
								                                'username', 
								                                'startScript', 
								                                'stopScript',
								                                'homeURL', 
								                                'tipo',
								                                'versionScript',
								                                'aliveURL']
														)
										);			
							}
						   );
	}
	
	module.exports.getServer = function(req, res) {
		console.log("getServer");
		var id = req.params.id;
		var serverDef = catalog.serverDefByID(id);
		var server = new Server(serverDef);
		serverBuilder.build(server,
					function(result) {
					res.send(JSON.stringify(result,['id', 
					                                'description', 
					                                'address', 
					                                'username', 
					                                'startScript', 
					                                'stopScript', 
					                                'homeURL', 
					                                'tipo',
					                                'version', 
					                                'isAlive']
											)
							);			
				}
			   );
	}
	
	module.exports.getServerStatus = function(req, res) {
		console.log("getServerStatus");
		var id = req.params.id;
		var serverDef = catalog.serverDefByID(id);
		var server = new Server(serverDef);
		server.isAlive(function(serverStatus) {
			res.send(JSON.stringify(serverStatus));	
		});
	}
	
	module.exports.getServerVersion = function(req, res) {
		console.log("getServerVersion");
		res.send("getServerVersion");
	}
	
	module.exports.startServer = function(req, res) {
		console.log("startServer");
		res.send("startServer");
	}
	
	module.exports.stopServer = function(req, res) {
		console.log("stopServer");
		res.send("stopServer");
	}
	
	module.exports.getEnvironments = function(req, res) {
		console.log("getEnvironments");
		var environmentDefs = catalog.environmentDefs();
		var result = environmentBuilder.build(environmentDefs);
		res.send(JSON.stringify(result,['id', 'description', 'color', 'homeURL', 'aliveURL', 'schemaScript', 'servers']));
	}
	
	module.exports.getEnvironment = function(req, res) {
		console.log("getEnvironment");
		var id = req.params.id;
		var environmentDef = catalog.environmentDefByID(id);
		var result = environmentBuilder.build(environmentDef);
		res.send(JSON.stringify(result,['id', 'description', 'color', 'homeURL', 'aliveURL', 'schemaScript', 'servers']));
	}
	
	module.exports.getEnvironmentStatus = function(req, res) {
		console.log("getEnvironmentStatus");
		res.send("getEnvironmentStatus");
	}
	
	module.exports.getEnvironmentSchema = function(req, res) {
		console.log("getEnvironmentSchema");
		res.send("getEnvironmentSchema");
	}
	
	module.exports.startEnvironment = function(req, res) {
		console.log("startEnvironment");
		res.send("startEnvironment");
	}
	
	module.exports.stopEnvironment = function(req, res) {
		console.log("stopEnvironment");
		res.send("stopEnvironment");
	}
	
	module.exports.getProjects = function(req, res) {
		var projectDefs = catalog.projectDefs();
		var result = projectBuilder.build(projectDefs);
		res.send(JSON.stringify(result,['id', 'description', 'environments']));
	}	
    
})();