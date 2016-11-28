'use strict';

(function() {
	
	var catalog = require('../model/catalog');
	catalog.reload(); // <<== OJITO, está aki el catalog.reload!!!!
	
	module.exports.reloadCatalogs = function(req, res) {
		console.log("reloadCatalogs");
		res.send("reloadCatalogs");
	}
	
	module.exports.getServers = function(req, res) {
		console.log("getServers");
		res.send("getServers");
	}
	
	module.exports.getServer = function(req, res) {
		console.log("getServer");
		res.send("getServer");
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
		res.send("getEnvironments");
	}
	
	module.exports.getEnvironment = function(req, res) {
		console.log("getEnvironment");
		res.send("getEnvironment");
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
		console.log("getProjects");
		res.send("getProjects");
	}	
    
})();