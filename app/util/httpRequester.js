'use strict';

(function() {

	var http = require('http');
	var https = require('https');
	
	function HTTPRequester () {
		var self = this;
		
	};
	
	HTTPRequester.prototype.getResponseCode = function(URL, callbackFunction) {
		if (URL.toUpperCase().startsWith('HTTPS')) {
			https.get(URL, function (res) {
				if (typeof callbackFunction !== 'undefined') {
					callbackFunction(res.statusCode);
				}			
			});			
		} else {
			http.get(URL, function (res) {
				if (typeof callbackFunction !== 'undefined') {
					callbackFunction(res.statusCode);
				}			
			});			
		}
	}
	
	module.exports = new HTTPRequester();

})();
