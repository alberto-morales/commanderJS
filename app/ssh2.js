var Client = require('ssh2').Client;
	
var conn = new Client();
conn.on('ready', function() {
	console.log('Client :: ready');
	conn.shell(function(err, stream) {
		if (err) throw err;
		stream.on('close', function() {
			console.log('Stream :: close');
			conn.end();
		}).on('data', function(data) {
			console.log('STDOUT: ' + data);
		}).stderr.on('data', function(data) {
			console.log('STDERR: ' + data);
		});
		stream.end('pwd\nexit\n');
	});
}).connect({
	host: '192.168.1.135',
	port: 22,
	username: 'tucho',
	password: 'tuputamadre'
});
