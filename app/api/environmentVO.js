'use strict';

(function() {
	
	function EnvironmentVO(id, description) {
		var self = this;
		
		self.id = id;
		self.description = description;
		self._color = '';
		self._homeURL = '';
		self._aliveURL = '';
		self._schemaScript = '';
		self._servers = [];
	}
	
	Object.defineProperty(EnvironmentVO.prototype, 'color', {
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
	
	Object.defineProperty(EnvironmentVO.prototype, 'homeURL', {
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
	
	Object.defineProperty(EnvironmentVO.prototype, 'aliveURL', {
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
	
	Object.defineProperty(EnvironmentVO.prototype, 'schemaScript', {
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
	
	Object.defineProperty(EnvironmentVO.prototype, 'servers', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._servers;
	    }
	});
	
	EnvironmentVO.prototype.addServer = function(newServerDef){
		var self = this;
		self._servers.push(newServerDef);
	}
	
	module.exports = EnvironmentVO;

})();
