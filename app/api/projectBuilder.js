'use strict';

(function() {
	
	// TODO quitar esto de aquí
	var toType = function(obj) {
	  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}
	var Project = require('./projectVO');
	var entityToVO = function(projectDef) {
		var projectVO = new ProjectVO(projectDef.id, 
									  projectDef.description
									  );
		for (var j = 0; j < projectDef.environmentList.length; j++) {
			var environmentDef = projectDef.environmentList[j];
			projectVO.addEnvironment(environmentDef.id);
		}
		
		return projectVO;
	}	
	
	function ProjectBuilder () {
		var self = this;

	};
		
	ProjectBuilder.prototype.build = function(arg) {
		
		var self = this;
		
		if (toType(arg) == 'array') {
			var result = [];
			for (var i = 0; i < arg.length; i++) {
				var projectDef = arg[i];
				var projectVO = entityToVO(projectDef);
				result.push(projectVO);
			}
			return result;
		} else {
			var projectDef = arg;
			var projectVO = entityToVO(projectDef);
			return projectVO;
		}
	}	
	
	var projectBuilder = new ProjectBuilder();
	
	module.exports = projectBuilder;
	
})();