'use strict';

(function() {
	
	// TODO quitar esto de aquí
	var toType = function(obj) {
	  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}
	var Server = require('./server');
	var entityToVO = function(serverDef) {
		var serverVO = new Server(serverDef.id, 
									   serverDef.description
								);
		serverVO.address = serverDef.hostConfig.address;
		serverVO.username = serverDef.hostConfig.username;
		serverVO.password = serverDef.hostConfig.password;
		serverVO.startScript = serverDef.startScript;
		serverVO.stopScript = serverDef.stopScript;
		serverVO.versionScript = serverDef.versionScript;
		serverVO.homeURL = serverDef.homeURL;
		serverVO.tipo = serverDef.tipo;
		
		return serverVO;
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
				var serverVO = entityToVO(serverDef);
				result.push(serverVO);
			}
			return result;
		} else {
			var serverDef = arg;
			var serverVO = entityToVO(serverDef);
			return serverVO;
		}
	}	
	
	var serverBuilder = new ServerBuilder();
	
	module.exports = serverBuilder;
	
})();