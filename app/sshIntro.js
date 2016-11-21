var Client = require('ssh2').Client;
 
var conn = new Client();
conn.on('ready', function() {
  console.log('Client :: ready');
  conn.shell(function(err, stream) {
    if (err) throw err;
    stream.on('close', function() {
	conn.end();
    }).on('data', function(data) {
      console.log(''+data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
    stream.end('cd /vagrant/jboss-eap-6.3/bin\n./run.sh\nexit\n');
  });
}).connect({
  host: '192.168.1.132',
  port: 22,
  username: 'tucho',
  password: 'tuputamadre'
});
