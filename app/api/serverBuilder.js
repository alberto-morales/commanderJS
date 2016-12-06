'use strict';

(function() {
	
	// TODO quitar esto de aquí
	var toType = function(obj) {
	  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}
	var ServerVO = require('./serverVO');

	var entityToVO = function(server, resolveAsyncProperties, callbackFunction) {
		var serverDef = server.serverDef;
		var serverVO = new ServerVO(serverDef.id, 
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
		
		if (resolveAsyncProperties) {
//			server.isAlive(function(isAlive) {
//				serverVO.isAlive = isAlive;
//				if (typeof callbackFunction !== 'undefined') {
//					callbackFunction(serverVO);	
//				}
//			});
			server.version(function(strVersion) {
				serverVO.version = strVersion;
				if (typeof callbackFunction !== 'undefined') {
					callbackFunction(serverVO);	
				}
			});			
			
		} else {
//			serverVO.aliveURL = serverDef.aliveURL;
//			if (typeof callbackFunction !== 'undefined') {
//				callbackFunction(serverVO);			
//			}
			serverVO.versionScript = serverDef.versionScript;
			if (typeof callbackFunction !== 'undefined') {
				callbackFunction(serverVO);			
			}
		} 
		
	}
	
	function ServerBuilder () {
		var self = this;

	};
		
	ServerBuilder.prototype.build = function(arg, callbackFunction) {
		
		var self = this;
		
		if (toType(arg) == 'array') {
			var result = [];
			for (var i = 0; i < arg.length; i++) {
				var server = arg[i];
				entityToVO(server, false, function(serverVO) {
					result.push(serverVO);
				});
			}
			if (typeof callbackFunction !== 'undefined') {
				callbackFunction(result);
			}
		} else {
			var server = arg;
			entityToVO(server, true, callbackFunction);
		}
	}	
	
	var serverBuilder = new ServerBuilder();
	
	module.exports = serverBuilder;
	
})();