module.exports = {

    PrepareStopBuffer: () => {

        var buffer = Buffer.alloc(1280);

        //Initialize all value to 0
        buffer.fill(0);

        //Type
        buffer.fill(0x01, 0, 1);
        buffer.fill(0x00, 1, 2);

        //Version
        buffer.fill(18, 2, 3);
        buffer.fill(0, 3, 4);

        //Command Number
        buffer.fill(120, 4, 5);
        buffer.fill(0, 5, 6);

        //Size
        buffer.fill(0x00, 8, 9);
        buffer.fill(0x04, 9, 10);
        buffer.fill(0x00, 10, 11);
        buffer.fill(0x00, 11, 12);

        //Machine Serial
        buffer.fill('Y30001', 28, 34);

        return buffer;
    },

    prepareNotSuppportedCommandBuffer: () =>{
        var buffer = Buffer.alloc(1280);

        //Initialize all value to 0
        buffer.fill(0);

        //Type
        buffer.fill(0x01, 0, 1);
        buffer.fill(0x00, 1, 2);

        //Version
        buffer.fill(18, 2, 3);
        buffer.fill(0, 3, 4);

        //Command Number
        buffer.fill(0x21, 4, 5);
        buffer.fill(0x00, 5, 6);

        //Size
        buffer.fill(0x00, 8, 9);
        buffer.fill(0x04, 9, 10);
        buffer.fill(0x00, 10, 11);
        buffer.fill(0x00, 11, 12);

        //Machine Serial
        buffer.fill('Y30001', 28, 34);

        return buffer;
    },

    prepareMachineSerialMissingBuffer: () =>{
        var buffer = Buffer.alloc(1280);

        //Initialize all value to 0
        buffer.fill(0);

        //Type
        buffer.fill(0x01, 0, 1);
        buffer.fill(0x00, 1, 2);

        //Version
        buffer.fill(18, 2, 3);
        buffer.fill(0, 3, 4);

        //Command Number
        buffer.fill(0x22, 4, 5);
        buffer.fill(0x00, 5, 6);

        //Size
        buffer.fill(0x00, 8, 9);
        buffer.fill(0x04, 9, 10);
        buffer.fill(0x00, 10, 11);
        buffer.fill(0x00, 11, 12);

        return buffer;
    },

    prepareMachineOfflineBuffer: () => {
        var buffer = Buffer.alloc(1280);

        //Initialize all value to 0
        buffer.fill(0);

        //Type
        buffer.fill(0x01, 0, 1);
        buffer.fill(0x00, 1, 2);

        //Version
        buffer.fill(18, 2, 3);
        buffer.fill(0, 3, 4);

        //Command Number
        buffer.fill(0x23, 4, 5);
        buffer.fill(0x00, 5, 6);

        //Size
        buffer.fill(0x00, 8, 9);
        buffer.fill(0x04, 9, 10);
        buffer.fill(0x00, 10, 11);
        buffer.fill(0x00, 11, 12);

        //Machine Serial
        buffer.fill('Y30001', 28, 34);

        return buffer;
    },

    preparseCurstsCommandBuffer: () =>{
        var buffer = Buffer.alloc(1280);

        //Initialize all value to 0
        buffer.fill(0);

        //Type
        buffer.fill(0x01, 0, 1);
        buffer.fill(0x00, 1, 2);

        //Version
        buffer.fill(18, 2, 3);
        buffer.fill(0, 3, 4);

        //Command Number
        buffer.fill(0x91, 4, 5);
        buffer.fill(0x01, 5, 6);

        //Size
        buffer.fill(0x00, 8, 9);
        buffer.fill(0x04, 9, 10);
        buffer.fill(0x00, 10, 11);
        buffer.fill(0x00, 11, 12);

        //Machine Serial
        buffer.fill('Y30001', 28, 34);

        return buffer;       
    }
}