'use strict';

(function() {
	
	var serverBuilder = require('./serverBuilder');
	var environmentBuilder = require('./environmentBuilder');
	var projectBuilder = require('./projectBuilder');
	
	// module.exports.Project = Project;
	// module.exports.Environment = Environment;
	// module.exports.Server = Server;
	
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
		var result = serverBuilder.build(serverDefs);
		res.send(JSON.stringify(result,['id', 'description', 'address', 'username', 'password', 'startScript', 'stopScript', 'versionScript', 'homeURL', 'tipo']));
	}
	
	module.exports.getServer = function(req, res) {
		console.log("getServer");
		var id = req.params.id;
		var serverDef = catalog.serverDefByID(id);
		var result = serverBuilder.build(serverDef);
		res.send(JSON.stringify(result,['id', 'description', 'address', 'username', 'password', 'startScript', 'stopScript', 'versionScript', 'homeURL', 'tipo']));
	}
	
	module.exports.getServerStatus = function(req, res) {
		console.log("getServerStatus");
		res.send("getServerStatus");
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