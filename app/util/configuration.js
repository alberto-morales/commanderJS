'use strict';

(function() {
	
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
		var jsonfile = require('jsonfile');
		
		var fileName = appSettings.configFile;
		
		jsonfile.readFile(fileName, function(err, configurationDef) {
			
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
			
			if (typeof callbackFunction != undefined) {
				callbackFunction();
			}
	
		})
		
		console.log("me salgo del configuration.reload");
	}

	module.exports = new Configuration();

})();
