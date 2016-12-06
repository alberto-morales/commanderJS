'use strict';

(function() {
	
	function ProjectVO (id, description) {
		var self = this;
	
		self.id = id;
		self.description = description;
		self._environments = [];	
	
	};
	
	Object.defineProperty(ProjectVO.prototype, 'environments', {
		enumerable: true,
	    get: function() {
			var self = this;
	        return self._environments;
	    }
	});
	
	ProjectVO.prototype.addEnvironment = function(newEnvironmentID){
		var self = this;
		self._environments.push(newEnvironmentID);
	}
	
	module.exports = ProjectVO;
	
})();
