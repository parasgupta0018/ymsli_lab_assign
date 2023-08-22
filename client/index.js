const net = require('net');
var client = new net.Socket();
function Start(ipAddress, port) {
    // var client = new net.Socket();

    //Keep Alive Functionality Enabled to keep socket alive
    client.setNoDelay(true);
    client.setKeepAlive(true, 1);

    //Connecting to TCP Socket prepared by application
    client.connect({
        port: port,
        host: ipAddress
    });
    client.on('data', (data) => {
        console.log("Data received:" + data);
    });
    //Connection Event For TCP Clients
    client.on('connect', function () {
        console.log("Connect");
    });
    //Error Event For TCP Clients
    client.on('error', function (error) {
        console.log("Error", error);
        client.destroy(); //Disconnecting from socket and destroying it
    });
    //Error Event For TCP Clients
    client.on('close', function () {
        console.log("Close");
    });
    // On conection Socket end 
    client.on('end', () => {
        console.log("End");
    });
}

Start('127.0.0.1', 5002);
// setTimeout(function () {
//     Start('127.0.0.1', 6000)
// }, 2000);
// setTimeout(function () {
//     throw new Error("Client error")
// }, 5000);

// Handle Unexpected Event, before closing the application
process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT_EXCEPTION: '+ err);
    client.destroy();
    process.exit();
});
process.on('unhandledRejection', function (err) {
    console.log('UNHANDLED_REJECTION: '+ err);
    process.exit();
});