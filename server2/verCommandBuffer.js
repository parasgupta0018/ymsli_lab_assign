module.exports = {

    PrepareVERBuffer: () => {

        var buffer = Buffer.alloc(1280);

        //Initialize all value to 0
        buffer.fill(0);

        //Type
        buffer.fill(0x01, 0, 1);
        buffer.fill(0x00, 1, 2);

        //Version
        buffer.fill(0x12, 2, 3);
        buffer.fill(0x00, 3, 4);

        //Command Number
        buffer.fill(0x7A, 4, 5);
        buffer.fill(0x00, 5, 6);

        //Size
        buffer.fill(0x00, 8, 9);
        buffer.fill(0x04, 9, 10);
        buffer.fill(0x00, 10, 11);
        buffer.fill(0x00, 11, 12);

        //Parameter1
        buffer.fill(0x00, 12, 13);
        buffer.fill(0x00, 13, 14);
        buffer.fill(0x00, 14, 15);
        buffer.fill(0x00, 15, 16);

        //Parameter2
        buffer.fill(0x00, 16, 17);
        buffer.fill(0x00, 17, 18);
        buffer.fill(0x00, 18, 19);
        buffer.fill(0x00, 19, 20);

        //Parameter3
        buffer.fill(0x00, 20, 21);
        buffer.fill(0x00, 21, 22);
        buffer.fill(0x00, 22, 23);
        buffer.fill(0x00, 23, 24);

        //Machine Serial
        buffer.fill('Y30001', 28, 34);

        return buffer;
    }
}