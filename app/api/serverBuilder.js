'use strict';

(function() {
	
	// TODO quitar esto de aquí
	var toType = function(obj) {
	  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}
	
	function ServerBuilder () {
		var self = this;

	};
		
	ServerBuilder.prototype.build = function(arg) {
		
		var self = this;
		
		var Server = require('./server');
		
		if (toType(arg) == 'array') {
			var result = [];
			for (var i = 0; i < arg.length; i++) {
				var serverDef = arg[i];
				var serverVO = new Server(serverDef.id, 
											serverDef.description
							);
				result.push(serverVO);
			}
			return result;
		} else {
			var serverDef = arg;
			var serverVO = new Server(serverDef.id, 
										serverDef.description
 							);
			return serverVO;
		}
	}	
	
	var serverBuilder = new ServerBuilder();
	
	module.exports = serverBuilder;
	
})();