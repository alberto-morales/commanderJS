'use strict';

(function() {
	
	// TODO quitar esto de aquí
	var toType = function(obj) {
	  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}
	var Environment = require('./environmentVO');
	var entityToVO = function(environmentDef) {
		var environmentVO = new EnvironmentVO(environmentDef.id, 
											  environmentDef.description
											  );
		environmentVO.color = environmentDef.color;
		environmentVO.homeURL = environmentDef.homeURL;
		environmentVO.aliveURL = environmentDef.aliveURL;
		environmentVO.schemaScript = environmentDef.schemaScript;
		
		for (var j = 0; j < environmentDef.serverList.length; j++) {
			var serverDef = environmentDef.serverList[j];
			environmentVO.addServer(serverDef.id);
		}
		
		return environmentVO;
	}
	
	function EnvironmentBuilder () {
		var self = this;

	};
		
	EnvironmentBuilder.prototype.build = function(arg) {
		
		var self = this;
		
		if (toType(arg) == 'array') {
			var result = [];
			for (var i = 0; i < arg.length; i++) {
				var environmentDef = arg[i];
				var environmentVO = entityToVO(environmentDef);
				result.push(environmentVO);
			}
			return result;
		} else {
			var environmentDef = arg;
			var environmentVO = entityToVO(environmentDef);
			return environmentVO;
		}
	}	
	
	var environmentBuilder = new EnvironmentBuilder();
	
	module.exports = environmentBuilder;
	
})();