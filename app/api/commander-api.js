'use strict';

(function() {
	
	module.exports.router = function() {
		// TODO evitar que se hagan muchas copias de este (la funcion) objeto
		var apiRouter = require('./router');	
		return apiRouter;
	};

})();