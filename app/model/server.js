'use strict';

(function() {
	
	var requester = require('../util/httpRequester');
	var commandRunner = require('../util/commandRunner');
	
	function Server (serverDef) {
		var self = this;
	
		self.serverDef = serverDef;
		
	};
	
	Server.prototype.isAlive = function(callbackFunction){
		var self = this;
		
		requester.getResponseCode(self.serverDef.aliveURL,
				function(responseCode) {
					var result = (responseCode == 200);
					if (typeof callbackFunction !== 'undefined') {
						callbackFunction(result);
					}			
		});
	}
	
	Server.prototype.version = function(callbackFunction){
		var self = this;
		
		var serverDef = self.serverDef;
		
//		if ("hcis" === serverDef.tipo) {
			commandRunner.run(serverDef.versionScript,
					{
						"host" : serverDef.hostConfig.address, 
						"port" : serverDef.hostConfig.SSHPort, 
						"username" : serverDef.hostConfig.username, 
						"password" : serverDef.hostConfig.password
					},
					function(commandOutput) {
						if (typeof callbackFunction !== 'undefined') {
							callbackFunction(commandOutput);
						}	
					}
			);
//		} else {
//			if (typeof callbackFunction !== 'undefined') {
//				callbackFunction('?');
//			}	
//		}
	}
	
	module.exports = Server;
		
})();