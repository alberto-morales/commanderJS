'use strict';

(function() {
	
	var requester = require('../util/httpRequester');
	
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
	
	module.exports = Server;
		
})();