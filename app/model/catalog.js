'use strict';

(function() {
	
	function Catalog () {
		var self = this;
		
		self.allElements = require('node-hashtable');
		
		self.isLoading = false;
	};
	
	Catalog.prototype.reload = function() {
		
		var self = this;
		
		self.isLoading = true;
		
		var configuration = require('../util/configuration');
		
		configuration.reload(function () {

			self.allElements.clear(function() {
				for (var i = 0; i < configuration.serverDefinitions.length; i++) {
					var serverDef = configuration.serverDefinitions[i];
					self.allElements.set('%SRV%'+serverDef.id, serverDef);
				}	
				for (var i = 0; i < configuration.environmentDefinitions.length; i++) {
					var environmentDef = configuration.environmentDefinitions[i];
					self.allElements.set('%ENV%'+environmentDef.id, environmentDef);
				}		
				for (var i = 0; i < configuration.projectDefinitions.length; i++) {
					var projectDef = configuration.projectDefinitions[i];
					self.allElements.set('%PRJ%'+projectDef.id, projectDef);
				}	
			});
			
		});				

		self.isLoading = false;
	}

	Catalog.prototype.serverDefs = function() {
		var self = this;
		var result = [];
		var keys = self.allElements.indexes();
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			if (key.substring(0,5) == '%SRV%') {
				result.push(self.allElements.get(key));
			}			
		}
		return result;
	}
	
	Catalog.prototype.serverDefByID = function(id) {
		var self = this;
		
		return self.allElements.get('%SRV%' + id);
	}	

	Catalog.prototype.environmentDefs = function() {
		var self = this;
		var result = [];
		var keys = self.allElements.indexes();
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			if (key.substring(0,5) == '%ENV%') {
				result.push(self.allElements.get(key));
			}			
		}
		return result;
	}
	
	Catalog.prototype.environmentDefByID = function(id) {
		var self = this;
		
		return self.allElements.get('%ENV%' + id);
	}	

	Catalog.prototype.projectDefs = function() {
		var self = this;		
		var result = [];
		var keys = self.allElements.indexes();
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			if (key.substring(0,5) == '%PRJ%') {
				result.push(self.allElements.get(key));
			}			
		}
		return result;
	}
	
	Catalog.prototype.projectDefByID = function(id) {
		var self = this;
		
		return self.allElements.get('%PRJ%'+id);
	}	
	
	var catalog = new Catalog();
	
	module.exports = catalog;
	
})();