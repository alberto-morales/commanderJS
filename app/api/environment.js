'use strict';

(function() {
	
	function Environment (id, description) {
		var self = this;
	
		self.id = id;
		self.description   = description;
		self.color = '';
		self.homeURL = '';
		self.aliveURL = '';
		self.schemaScript = '';
		self.servers = [];
	
	};
	
	Environment.prototype.color = function(color) {
		var self = this;
		if (!(typeof color == 'undefined')) {
		   self.color = color;
		}
		return self.color;
	}
	
	Environment.prototype.homeURL = function(homeURL) {
		var self = this;
		if (!(typeof homeURL == 'undefined')) {
		   self.homeURL = homeURL;
		}
		return self.homeURL;
	}
	
	Environment.prototype.aliveURL = function(aliveURL) {
		var self = this;
		if (!(typeof aliveURL == 'undefined')) {
		   self.aliveURL = aliveURL;
		}
		return self.aliveURL;
	}
	
	Environment.prototype.schemaScript = function(schemaScript) {
		var self = this;
		if (!(typeof schemaScript == 'undefined')) {
		   self.schemaScript = schemaScript;
		}
		return self.schemaScript;
	}
	
	Environment.prototype.servers = function() {
		var self = this;
		return self.servers;
	}
	
	module.exports = Environment;

})();
