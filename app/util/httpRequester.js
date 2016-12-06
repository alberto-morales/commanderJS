'use strict';

(function() {
	
	function HTTPRequester () {
		var self = this;
		
	};
	
	HTTPRequester.prototype.getResponseCode = function(URL, callbackFunction) {
		var http = require('http');
		http.get(URL, function (res) {
			console.log(res.statusCode);
			if (typeof callbackFunction !== 'undefined') {
				callbackFunction(res.statusCode);
			}			
		});
	}
	
	module.exports = new HTTPRequester();

})();
