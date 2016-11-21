'use strict';

(function() {
	
	var Server = require('./server');
	
	function Environment (id, description) {
		var self = this;
	
		self.id = id;
		self.description   = description;
	
		// $.extend(true, self, serverData);
	
	};
	
	Environment.prototype.escribe = function(){
		var self = this;
		console.log('Soy el environment '+self.id+' con descripcion '+self.description);
	}
	
	module.exports = Environment;

})();