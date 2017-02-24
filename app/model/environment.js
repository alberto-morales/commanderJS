'use strict';

(function() {
	
	var appSettings = require('../util/settings');
	var requester = require('../util/httpRequester');
	var commandRunner = require('../util/commandRunner');
	
	function Environment (environmentDef) {
		var self = this;
	
		self.environmentDef = environmentDef;
		
	};
	
	Environment.prototype.isAlive = function(callbackFunction){
		var self = this;
		
		requester.getResponseCode(self.environmentDef.aliveURL,
				function(responseCode) {
					var result = (responseCode == 200);
					if (typeof callbackFunction !== 'undefined') {
						callbackFunction(result);
					}			
		});
	}
	
	Environment.prototype.schema = function(callbackFunction){
		var self = this;
		
		var environmentDef = self.environmentDef;
		var serverDef = environmentDef.serverList[0];
		
		commandRunner.run(environmentDef.schemaScript,
				{
					"host" : serverDef.hostConfig.address, 
					"port" : serverDef.hostConfig.SSHPort, 
					"username" : serverDef.hostConfig.username, 
					"password" : serverDef.hostConfig.password,
					"readyTimeout" : appSettings.timeoutValue
				},
				function(commandOutput) {
					if (typeof callbackFunction !== 'undefined') {
						callbackFunction(commandOutput);
					}	
				}
		);
	}
	
	module.exports = Environment;
		
})();