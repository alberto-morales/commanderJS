	// var bodyParser = require('body-parser');
	//var methodOverride = require("method-override");
	// Middlewares
	//app.use(bodyParser.urlencoded({ extended: false })); 
	//app.use(bodyParser.json()); 
	//app.use(methodOverride());

	var appSettings = require('./util/settings');
	var express = require('express');
	var app = express();
	var cors = require('cors');
	var corsOptions = {
		  "origin": "*",
		  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
		  "preflightContinue": false,
		  "optionsSuccessStatus" : 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
		};
	app.use(cors(corsOptions));
	
	var router = express.Router();
	router.get('/', function(req, res) { 
		 res.send("Welcome to Commander API v.0.0.1");
	});
	app.use(router);
	
	var commanderAPI = require('./api/commander-api');
	var apirouter = commanderAPI.router();
	app.use('/rest', apirouter);

	// Start server
	var server = app.listen(appSettings.port, function() {		
		 console.log('Node server running on http://localhost:'+appSettings.port);
	});

	var io  = require('socket.io')(server, { path: '/logViewer'});
//	io.on('connection', function(socket) {
//	    console.log('a user connected with id %s', socket.id);
//	    socket.on('ackLogViewer', function(data) {
//			console.log('echo receiving ' + data);
//		    setTimeout(function(){ 
//							var f=new Date();
//							var cad=f.getHours()+":"+f.getMinutes()+":"+f.getSeconds(); 
//							cad = 'Patrullando a las ' + cad;
//							console.log('broadcasting '+cad);
//							socket.emit('clv', cad);
//						 }, 
//					   2000
//					  );			
//		});
//	    setTimeout(function(){ 
//	    						var f=new Date();
//	    						var cad=f.getHours()+":"+f.getMinutes()+":"+f.getSeconds(); 
//	    						cad = 'Patrullando a las ' + cad;
//	    						console.log('broadcasting '+cad);
//	    						socket.emit('clv', cad);
//	    					 }, 
//	    		   2000
//	    		  );
//	});

	var lastACK = new Date().getTime();
	
	function compruebaPerdidaConexion(socket, remoteFileHarvester) {
		var actualTimestamp = new Date().getTime();
		if (actualTimestamp - lastACK > 10000) {
			socket.disconnect();
			remoteFileHarvester.end();
		} else {
		   lastACK = actualTimestamp;
			setTimeout(function() {
				compruebaPerdidaConexion(socket, remoteFileHarvester);
			}, 10000);	
		}
	}
	
	io.on('connection', function(socket) {
	    console.log('a user connected with id %s', socket.id);
	    
//	    socket.on('ackLogViewer', function(data) {
//	    	lastACK = new Date().getTime();
//	    });
	    
	    socket.on('keepAliveLogViewer', function(data) {
	    	console.log('keeping alive server');
	    	lastACK = new Date().getTime();
	    });
	    
		var remoteFileHarvester = require('./util/remoteFileHarvester');
		remoteFileHarvester.sendData('/hcis/orawls12c/deployments/logs/hcis/RecDatos.log',
									 {"host" : "10.196.18.67",
									  "port" : 22,
									  "username" : "weblogic",
									  "password" : "eRUWtWVotEq6XDIvW+l5ew=="
									 },
									 function(data) {
										 socket.emit('clv', ''+data)
									 }
									);
		setTimeout(function() {
			compruebaPerdidaConexion(socket, remoteFileHarvester);
		}, 10000);	

	});
	
