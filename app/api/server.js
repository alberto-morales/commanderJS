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
	
	Object.defineProperty(Server.prototype, 'address', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._address;
	    },
	    set: function(val) {
			var self = this;
			self._address = val;
	    }
	});
	
	Object.defineProperty(Server.prototype, 'username', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._username;
	    },
	    set: function(val) {
			var self = this;
			self._username = val;
	    }
	});
	
	Object.defineProperty(Server.prototype, 'password', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._password;
	    },
	    set: function(val) {
			var self = this;
			self._password = val;
	    }
	});
	
	Object.defineProperty(Server.prototype, 'startScript', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._startScript;
	    },
	    set: function(val) {
			var self = this;
			self._startScript = val;
	    }
	});
	
	Object.defineProperty(Server.prototype, 'stopScript', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._stopScript;
	    },
	    set: function(val) {
			var self = this;
			self._stopScript = val;
	    }
	});
	
	Object.defineProperty(Server.prototype, 'homeURL', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._homeURL;
	    },
	    set: function(val) {
			var self = this;
			self._homeURL = val;
	    }
	});
	
	Object.defineProperty(Server.prototype, 'tipo', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._tipo;
	    },
	    set: function(val) {
			var self = this;
			self._tipo = val;
	    }
	});
	
	module.exports = Server;
	
})();
