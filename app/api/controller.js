'use strict';

(function() {
	
	var serverBuilder = require('./serverBuilder');
	var environmentBuilder = require('./environmentBuilder');
	var projectBuilder = require('./projectBuilder');
	
	var Server = require('../model/server');
	var Environment = require('../model/environment');
	
	var catalog = require('../model/catalog');
	catalog.reload(); // <<== OJITO, está aki el catalog.reload!!!!
	
	var encDecrypter = require('../util/encDecrypter');

	module.exports.encryptPassword = function(req, res) {
		console.log("encryptPassword");
		var plainPassword = req.params.plainPassword;
		var encryptedPassword = encDecrypter.encrypt(plainPassword);
		res.send(encryptedPassword);
	}

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
						                                'alive']
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
		server.isAlive(function(isAlive) {
			res.send(JSON.stringify(isAlive));	
		});
	}
	
	module.exports.getServerVersion = function(req, res) {
		console.log("getServerVersion");
		var id = req.params.id;
		var serverDef = catalog.serverDefByID(id);
		var server = new Server(serverDef);
		server.version(function(version) {
			res.send(version);	
		});
	}
	
	module.exports.startServer = function(req, res) {
		console.log("startServer");
		res.send("server :-) started");
	}
	
	module.exports.stopServer = function(req, res) {
		console.log("stopServer");
		res.send("server :-) stopped");
	}
	
	module.exports.getEnvironments = function(req, res) {
		console.log("getEnvironments");
		var environmentDefs = catalog.environmentDefs();
		var result = environmentBuilder.build(environmentDefs);
		res.send(JSON.stringify(result,['id', 'description', 'color', 'homeURL', 'aliveURL', 'schemaScript', 'servers',
		                                'address', 
		                                'username', 
		                                'startScript', 
		                                'stopScript', 
		                                'tipo',
		                                'version', 
		                                'alive']));
	}
	
	module.exports.getEnvironment = function(req, res) {
		console.log("getEnvironment");
		var id = req.params.id;
		var environmentDef = catalog.environmentDefByID(id);
		var result = environmentBuilder.build(environmentDef);
		res.send(JSON.stringify(result,['id', 'description', 'color', 'homeURL', 'aliveURL', 'schemaScript', 'servers',
		                                'address', 
		                                'username', 
		                                'startScript', 
		                                'stopScript', 
		                                'tipo',
		                                'version', 
		                                'alive']));
	}
	
	module.exports.getEnvironmentStatus = function(req, res) {
		console.log("getEnvironmentStatus");
		var id = req.params.id;
		var environmentDef = catalog.environmentDefByID(id);
		var environment = new Environment(environmentDef);
		environment.isAlive(function(isAlive) {
			res.send(JSON.stringify(isAlive));	
		});
	}
	
	module.exports.getEnvironmentSchema = function(req, res) {
		console.log("getEnvironmentSchema");
		var id = req.params.id;
		var environmentDef = catalog.environmentDefByID(id);
		var environment = new Environment(environmentDef);
		environment.schema(function(schema) {
			res.send(schema);	
		});
	}
	
	module.exports.startEnvironment = function(req, res) {
		console.log("startEnvironment");
		res.send("environment :-) started");
	}
	
	module.exports.stopEnvironment = function(req, res) {
		console.log("stopEnvironment");
		res.send("environment :-) stopped");
	}
	
	module.exports.getProjects = function(req, res) {
		var projectDefs = catalog.projectDefs();
		var result = projectBuilder.build(projectDefs);
		res.send(JSON.stringify(result,['id', 'description', 'environments']));
	}	
    
})();