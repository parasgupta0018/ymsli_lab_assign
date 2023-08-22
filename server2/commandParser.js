var parser = require('binary-parser').Parser;

//Parser for Command Reply Packet 
global.commandReplyPacketParser = new parser()
    .endianess('little')
    .uint16('TYPE')
    .uint16('VERSION')
    .uint16('COMMAND')
    .uint16('EXECUTION_RESULT')
    .uint32('SIZE')
    .uint32('PARAMETER_1')
    .uint32('PARAMETER_2')
    .uint32('PARAMETER_3')
    .uint32('PARAMETER_4')
    .string('MACHINE_SERIAL', {
        length: 6
    })

//Parser for Command Request Packet 
global.commandRequestPacketParser = new parser()
    .endianess('little')
    .uint16('TYPE')
    .uint16('VERSION')
    .uint16('COMMAND')
    .string('SPARE_1', {
        length: 22
    })
    .string('MACHINE_SERIAL', {
        length: 6
    })

global.commandEnum = {
    33: 'COMMAND_NOT-SUPPORTED', //These are Just Made for NG Cases
    34: 'MACHINE_SERIAL_MISSING', //Made Only for NG Case
    35: 'MACHINE_OFFLINE', //Made Only for NG Case
    101: 'CUR',
    122: 'VER',
    206: 'READEX',
    401: 'CURSTS',
    10016: 'FDR_NAME',
    10027: 'INTERLOCK',
}    

function commandResponseParser(commandData) {
    let commandResponse = commandReplyPacketParser.parse(commandData);
    return commandResponse;
}

function commandRequestParser(commandRequestPacket) {
    let commandRequest = commandRequestPacketParser.parse(commandRequestPacket);
    return commandRequest;
}

module.exports = {
    commandResponseParser,
    commandRequestParser
};