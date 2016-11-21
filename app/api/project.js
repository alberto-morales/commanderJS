'use strict';

(function() {
	
	var Environment = require('./environment');
	
	function Project (id, description) {
		var self = this;
	
		self.id = id;
		self.description   = description;
	
		// $.extend(true, self, serverData);
	
	};
	
	Project.prototype.escribe = function(){
		var self = this;
		console.log('Soy el project '+self.id+' con descripcion '+self.description);
	}
	
	module.exports = Project;
	
})();