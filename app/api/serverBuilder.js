'use strict';

(function() {
	
	// TODO quitar esto de aquí
	var toType = function(obj) {
	  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}
	var ServerVO = require('./serverVO');
	var async = require('async')

	// esto pierde por todos lados, Server.serverDef viola la encapsulacion tremendamente?
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
//				serverVO.alive = isAlive;
//				if (typeof callbackFunction !== 'undefined') {
//					callbackFunction(serverVO);	
//				}
//			});
//			server.version(function(strVersion) {
//				serverVO.version = strVersion;
//				if (typeof callbackFunction !== 'undefined') {
//					callbackFunction(serverVO);	
//				}
//			});				
			async.parallel({
			    callAlive: function(callback) {
					server.isAlive(function(isAlive) {
						callback(null, isAlive);
					});
			    },
			    callVersion: function(callback) {
					server.version(function(strVersion) {
						callback(null, strVersion);
					});	
			    }
			}, function(err, results) {
				var isAlive = results.callAlive;
				serverVO.alive = isAlive;
				var strVersion = results.callVersion;
				serverVO.version = strVersion;
				if (typeof callbackFunction !== 'undefined') {
					callbackFunction(serverVO);	
				}			
			})
			
		} else {
			serverVO.aliveURL = serverDef.aliveURL;
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