'use strict';

(function() {
	
	function Server (id, description) {
		var self = this;
	
		self.id = id;
		self.description   = description;
	
		// $.extend(true, self, serverData);
	
	};
	
	Server.prototype.escribe = function(){
		var self = this;
		console.log('Soy el server '+self.id+' con descripcion '+self.description);
	}
	
	module.exports = Server;

})();
