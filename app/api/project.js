'use strict';

(function() {
	
	function Project (id, description) {
		var self = this;
	
		self.id = id;
		self.description   = description;
		self.environments = [];	
	
	};
	
	Project.prototype.addEnvironment = function(newEnvironment){
		var self = this;
		self.environments.push(newEnvironment);
	}
	
	Project.prototype.environments = function(){
		var self = this;
		return self.environments;
	}
	
	module.exports = Project;
	
})();
