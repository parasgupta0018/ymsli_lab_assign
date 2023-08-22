module.exports = {

    PrepareUDPBuffer: () => {

        var buffer = Buffer.alloc(1280);

        //Initialize all value to 0
        buffer.fill(0);

        //Packet Type
        buffer.fill(0x64, 0, 1);
        buffer.fill(0x00, 1, 2);

        //dummy
        buffer.fill(0x00, 2, 3);
        buffer.fill(0x00, 3, 4);

        return buffer;
    }
}

// module.exports = {



//     PrepareUDPBuffer: () => {

//         var buffer = Buffer.alloc(1280);



//         //Initialize all value to 0
//         buffer.fill(0);



//         //Packet Type
//         buffer.fill(0x66, 0, 1);
//         buffer.fill(0x00, 1, 2);



//         //dummy
//         buffer.fill(0x00, 2, 3);
//         buffer.fill(0x00, 3, 4);



//         // port number plug
//         buffer.fill(0x00,8,9);



//         // machine serial 1
//         buffer.fill('Y48745',13,19);

//         // machine serial 2
//         buffer.fill('Y30001',35,41);

//         // machine serial 3
//         buffer.fill('c',41,55);
//         buffer.fill('c',55,69);



//         // terminator
//         buffer.fill(0x00,69,70);

//         return buffer;

//     }

// }