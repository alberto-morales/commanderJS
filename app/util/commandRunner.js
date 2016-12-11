'use strict';

(function() {
	
	function CommandRunner () {
		var self = this;
		
	};

	var encDecrypter = require('../util/encDecrypter');

	CommandRunner.prototype.run = function(command, hostConfig, callbackFunction) {
		
		var encryptedPassword = hostConfig.password;
		var plainPassword = encDecrypter.decrypt(encryptedPassword);
		hostConfig.password = plainPassword;
		
		var SSH2Utils = require('ssh2-utils');
	    var ssh = new SSH2Utils();

	    ssh.run(hostConfig, command, function(err,stdout,stderr,server,conn) {
	    	var strOutput = '';
	    	
	        if(err) console.log(err);

	        if (stderr != null) {
		        if (typeof stderr === 'object') {
			        stderr.on('data', function(data) {
			            console.log('(ERR) '+data);
			            strOutput += '(ERR) '+data;
			        });
		        } else if (typeof stderr === 'string') {
			        strOutput += '(ERR) '+err;
					callbackFunction(strOutput);			
		        }
	        }
		    if (typeof stdout === 'object' && stdout != null) {
		        stdout.on('data', function(data) {
		            strOutput += ''+data;
		        });
		        stdout.on('close',function() {
		            conn.end();
					if (typeof callbackFunction !== 'undefined') {
						callbackFunction(strOutput);			
					}
		        });
	        }
	    });
	    
	}
	
	module.exports = new CommandRunner();

})();