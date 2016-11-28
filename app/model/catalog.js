'use strict';

(function() {
	
	var hashtable = require('node-hashtable');
	var appSettings = require('../util/settings');
	
	var file = appSettings.config-file;
	jsonfile.readFile(file, function(err, obj) {
		console.log('los proyectos son '+obj.projects.length);
		hashtable.set('uno', {value: '1'});
		hashtable.set('dos', {value: '2'});
		hashtable.set('tres', {value: '3'});
	
		console.log(hashtable.get('dos'));
	})

})();