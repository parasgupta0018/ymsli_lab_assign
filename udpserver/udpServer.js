module.exports = {
    startUdpServer: () => {

        var dgram = require('dgram');

        var client = dgram.createSocket('udp4');
        let prepareBuffer = require('./testBuffer');
        let buffer = prepareBuffer.PrepareUDPBuffer();

        // console.log(client);


        setInterval(() => {
            client.send(buffer, 0, 1280, 6119, '127.0.0.1', function (err, bytes) {
            });
        }, 5000);

    }
}

//    const startUdpServer=() => {

//         var dgram = require('dgram');

//         var client = dgram.createSocket('udp4');
//         let prepareBuffer = require('./testBuffer');
//         let buffer = prepareBuffer.PrepareUDPBuffer();

//         setInterval(() => {
//             client.send(buffer, 0, 12, 6109, '127.0.0.1', function (err, bytes) {
//             });
//         }, 5000);

//     }

// startUdpServer();