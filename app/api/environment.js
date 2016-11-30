'use strict';

(function() {
	
	function Environment (id, description) {
		var self = this;
	
		self.id = id;
		self.description = description;
		self._color = '';
		self._homeURL = '';
		self._aliveURL = '';
		self._schemaScript = '';
		self._servers = [];
	
	};
	
	Environment.prototype.color = function(color) {
		var self = this;
		if (!(typeof color == 'undefined')) {
		   self._color = color;
		}
		return self._color;
	}
	
	Environment.prototype.homeURL = function(homeURL) {
		var self = this;
		if (!(typeof homeURL == 'undefined')) {
		   self._homeURL = homeURL;
		}
		return self._homeURL;
	}
	
	Environment.prototype.aliveURL = function(aliveURL) {
		var self = this;
		if (!(typeof aliveURL == 'undefined')) {
		   self._aliveURL = aliveURL;
		}
		return self._aliveURL;
	}
	
	Environment.prototype.schemaScript = function(schemaScript) {
		var self = this;
		if (!(typeof schemaScript == 'undefined')) {
		   self._schemaScript = schemaScript;
		}
		return self._schemaScript;
	}
	
	Environment.prototype.addServer = function(newServerID){
		var self = this;
		self._servers.push(newServerID);
	}
	
	Environment.prototype.servers = function() {
		var self = this;
		return self._servers;
	}
	
	module.exports = Environment;

})();
