'use strict';

(function() {
	
	function Server (id, description) {
		var self = this;
	
		self.id = id;
		self.description   = description;
		self.address = '';
		self.username = '';
		self.password = '';
		self.startScript = '';
		self.stopScript = '';
		self.homeURL = '';
		self.tipo = '';	
	
	};
	
	Server.prototype.address = function(address){
		var self = this;
		if (!(typeof address == 'undefined')) {
			self.address = address;
		}
		return self.address;
	}

	Server.prototype.username = function(username){
		var self = this;
		if (!(typeof username == 'undefined')) {
			self.username = username;
		}
		return self.username;
	}

	Server.prototype.password = function(password){
		var self = this;
		if (!(typeof password == 'undefined')) {
			self.password = password;
		}
		return self.password;
	}

	Server.prototype.startScript = function(startScript){
		var self = this;
		if (!(typeof startScript == 'undefined')) {
			self.startScript = startScript;
		}
		return self.startScript;
	}

	Server.prototype.stopScript = function(stopScript){
		var self = this;
		if (!(typeof stopScript == 'undefined')) {
			self.stopScript = stopScript;
		}
		return self.stopScript;
	}

	Server.prototype.homeURL = function(homeURL){
		var self = this;
		if (!(typeof homeURL == 'undefined')) {
			self.homeURL = homeURL;
		}
		return self.homeURL;
	}

	Server.prototype.tipo = function(tipo){
		var self = this;
		if (!(typeof tipo == 'undefined')) {
			self.tipo = tipo;
		}
		return self.tipo;
	}

	module.exports = Server;
	
})();
