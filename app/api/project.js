'use strict';

(function() {
	
	function Project (id, description) {
		var self = this;
	
		self.id = id;
		self.description = description;
		self._environments = [];	
	
	};
	
	Project.prototype.addEnvironment = function(newEnvironmentID){
		var self = this;
		self._environments.push(newEnvironmentID);
	}
	
	Project.prototype.environments = function(){
		var self = this;
		return self._environments;
	}
	
	module.exports = Project;
	
})();
