'use strict';

(function() {
	
	function Server (id, description) {
		var self = this;
	
		self.id = id;
		self.description   = description;
		self._address = '';
		self._username = '';
		self._password = '';
		self._startScript = '';
		self._stopScript = '';
		self._homeURL = '';
		self._tipo = '';	
	
	};
	
	Server.prototype.address = function(address){
		var self = this;
		if (!(typeof address == 'undefined')) {
			self._address = address;
		}
		return self._address;
	}

	Server.prototype.username = function(username){
		var self = this;
		if (!(typeof username == 'undefined')) {
			self._username = username;
		}
		return self._username;
	}

	Server.prototype.password = function(password){
		var self = this;
		if (!(typeof password == 'undefined')) {
			self._password = password;
		}
		return self._password;
	}

	Server.prototype.startScript = function(startScript){
		var self = this;
		if (!(typeof startScript == 'undefined')) {
			self._startScript = startScript;
		}
		return self._startScript;
	}

	Server.prototype.stopScript = function(stopScript){
		var self = this;
		if (!(typeof stopScript == 'undefined')) {
			self._stopScript = stopScript;
		}
		return self._stopScript;
	}

	Server.prototype.homeURL = function(homeURL){
		var self = this;
		if (!(typeof homeURL == 'undefined')) {
			self._homeURL = homeURL;
		}
		return self._homeURL;
	}

	Server.prototype.tipo = function(tipo){
		var self = this;
		if (!(typeof tipo == 'undefined')) {
			self._tipo = tipo;
		}
		return self._tipo;
	}

	module.exports = Server;
	
})();
