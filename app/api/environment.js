'use strict';

(function() {
	
	function Environment(id, description) {
		var self = this;
		
		self.id = id;
		self.description = description;
		self._color = '';
		self._homeURL = '';
		self._aliveURL = '';
		self._schemaScript = '';
		self._servers = [];
	}
	
	Object.defineProperty(Environment.prototype, 'color', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._color;
	    },
	    set: function(val) {
			var self = this;
			self._color = val;
	    }
	});
	
	Object.defineProperty(Environment.prototype, 'homeURL', {
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
	
	Object.defineProperty(Environment.prototype, 'aliveURL', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._aliveURL;
	    },
	    set: function(val) {
			var self = this;
			self._aliveURL = val;
	    }
	});
	
	Object.defineProperty(Environment.prototype, 'schemaScript', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._schemaScript;
	    },
	    set: function(val) {
			var self = this;
			self._schemaScript = val;
	    }
	});
	
	Object.defineProperty(Environment.prototype, 'servers', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._servers;
	    }
	});
	
	Environment.prototype.addServer = function(newServerID){
		var self = this;
		self._servers.push(newServerID);
	}
	
	module.exports = Environment;

})();
