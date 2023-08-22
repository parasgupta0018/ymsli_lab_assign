let udpServer = require('./udpserver/udpServer');
let reportServer = require('./server1/index');
let commandServer = require('./server2/index');

reportServer.startReportServer();
// commandServer.startCommandServer();
udpServer.startUdpServer();