'use strict';

(function() {
	
	// TODO quitar esto de aquí
	var fs = require('fs');
	function loadJSONfile (filename, encoding) {
		try {
			// default encoding is utf8
			if (typeof encoding === 'undefined') encoding = 'utf8';
			
			// read file synchroneously
			var contents = fs.readFileSync(filename, encoding);				

			// parse contents as JSON
			return JSON.parse(contents);
			
		} catch (err) {
			// an error occurred
			throw err;	
		}
	} // loadJSONfile
	
	function Configuration () {
		var self = this;
		
		self.serverDefinitions = [];
		self.environmentDefinitions = [];
		self.projectDefinitions = [];
	};

	Configuration.prototype.reload = function(callbackFunction) {
		var self = this;
		
		console.log("entro en el configuration.reload");
		
		var appSettings = require('./settings');
		
		var fileName = appSettings.configFile;
		
		var configurationDef = loadJSONfile(fileName, 'binary');	
		
		console.log('INICIO carga configuracion de '+configurationDef.projects.length+' projects');
		
		for (var i = 0; i < configurationDef.projects.length; i++) {
			var projectDef = configurationDef.projects[i];
			self.projectDefinitions.push(projectDef);
			for (var j = 0; j < projectDef.environmentList.length; j++) {
				var environmentDef = projectDef.environmentList[j];
				self.environmentDefinitions.push(environmentDef);
				for (var k = 0; k < environmentDef.serverList.length; k++) {
					var serverDef = environmentDef.serverList[k];
					self.serverDefinitions.push(serverDef);
				}				
			}
		}
		
		console.log('FINALIZO carga configuracion, y voy a llamar a la callbackFunction');
		
		if (typeof callbackFunction !== 'undefined') {
			callbackFunction();
		}
		
		console.log("me salgo del configuration.reload");
	}

	module.exports = new Configuration();

})();
