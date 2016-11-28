'use strict';

(function() {
	
	var Project = require('./project');
	var Environment = require('./environment');
	var Server = require('./server');
	
	module.exports.Project = Project;
	module.exports.Environment = Environment;
	module.exports.Server = Server;
	
	module.exports.router = function() {
		// TODO evitar que se hagan muchas copias de este (la funcion) objeto
		var apiRouter = require('./router');	
		return apiRouter;
	};

})();