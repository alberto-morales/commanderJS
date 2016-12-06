	var SSH2Utils = require('ssh2-utils');
    var ssh = new SSH2Utils();

    var server = {host: "192.168.1.135", port: 22, username:"tucho", password:"tuputamadre" };

    ssh.run(server, ['pwd', 'cd /vagrant','ls -la'], function(err,stdout,stderr,server,conn){
        if(err) console.log(err);
        stdout.on('data', function(data){
            console.log(''+data);
        });
        stderr.on('data', function(data){
            console.log(''+data);
        });
        stdout.on('close',function(){
            conn.end();
        });
    });