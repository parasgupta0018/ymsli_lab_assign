module.exports = {

  startCommandServer: async () => {

    var commandSent = 1;
    var commandReceived = 1;

    const net = require('net');

    //CUR_COMMAND_BUFFER: Here Machine Serial Mentioned is of Offline Machine
    let curCommandBuffer = require('./curCommandBuffer');
    let curBuffer = curCommandBuffer.PrepareCURBuffer();

    //FDR_NAME_COMMAND_BUFFER
    let fdrNameCommand = require('./fdrNameCommandBuffer');
    let fdrNameCommandBuffer = fdrNameCommand.PrepareFdrNameCommandBuffer();

    //VER_COMMAND_BUFFER
    let ver = require('./verCommandBuffer');
    let verBuffer = ver.PrepareVERBuffer();

    //INTERLOCK_COMMAND_BUFFER
    let interlock = require('./InterlockBuffer');
    let interlockBuffer = interlock.prepareInterlockCommandBuffer(1);

    //READEX_COMMAND_BUFFER
    let readEx = require('./readExCommandBuffer');
    let readExBuffer = readEx.prepareReadExCommandBuffer(206, 4, 0, 1, 'test_L');

    //CURSTS Command Buffer
    let buffer = require('./commandBuffer');
    let curstsCommandBUffer = buffer.preparseCurstsCommandBuffer();

    //NG Case : For Not Supported Command
    let nonSupportedCommandBuffer = buffer.prepareNotSuppportedCommandBuffer();
    
    //NG Case: For Machine Serial Missing Buffer
    let prepareMachineSerialMissingBuffer = buffer.prepareMachineSerialMissingBuffer();
    
    //NG Case: For Machine Offline Buffer
    let prepareMachineOfflineBuffer = buffer.prepareMachineOfflineBuffer();

    //Parser File Reference
    let parser = require('./commandParser');

    //Array Storing Different Command Buffer
    //OK CASES
    let array = [curBuffer, verBuffer, interlockBuffer, readExBuffer, fdrNameCommandBuffer, curstsCommandBUffer];
    //NG CASES
    // let array = [nonSupportedCommandBuffer, prepareMachineSerialMissingBuffer, prepareMachineOfflineBuffer];
    //OK AND NG CASES
    // let array = [curBuffer, verBuffer, interlockBuffer, readExBuffer, fdrNameCommandBuffer, curstsCommandBUffer, nonSupportedCommandBuffer, prepareMachineSerialMissingBuffer, prepareMachineOfflineBuffer];

    let client = null
    const server = net.createServer((c) => {
      // 'connection' listener.
      client = c;
      console.log('client connected at Command Port');
 
      c.on('end', (err) => {
        console.log('client disconnected at Command Port');
        console.log(err);
      });
 
      c.on('data', (data) => {
        //Parsing Command Response Received from Forwarding Module
        let parsedData = parser.commandResponseParser(data);
        console.log('+++: RESPONSE RECEIVED :+++', commandReceived);
        console.log(`Response Received for Command: ${parsedData.COMMAND} [${commandEnum[parsedData.COMMAND]}] for Machine: ${parsedData.MACHINE_SERIAL} with Execution Result: ${parsedData.EXECUTION_RESULT}`);
        //Increment Count
        commandReceived++;
      });
 
      c.on('close', () => {
        console.log('client close at Command Port');
      });
    });

    server.on('error', (err) => {
      console.log(`Error Occurred in Command Port: ${err}`);
    });

    server.on('close', (err) => {
      console.log("Server close at Command Port")
    });

    server.listen(5002, () => {
      console.log('server bound at Command Port');
    });

    setInterval(function () {
      if (client != null || client != undefined) {
        let buffer = array[parseInt(Math.random() * array.length)];
        //Parsing Command Request Packet Buffer
        let commandRequestPacket = parser.commandRequestParser(buffer);
        //Writing over Socket
        client.write(buffer);
        console.log('+++: SENT :+++', commandSent);
        console.log(`Request Sent for Command: ${commandRequestPacket.COMMAND} [${commandEnum[commandRequestPacket.COMMAND]}] for Machine: ${commandRequestPacket.MACHINE_SERIAL}`);
        //Increment Command Sent Count
        commandSent++;
      }
    }, 5000);
  }
}