/**
 * Project Name : Relay Server
 * @company YMSLI
 * @author  Prashant Goyal
 * @date    Apr 28, 2021
 * Copyright (c) 2019, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * 
 * Module: Buffers
 * Description
 * ----------------------------------------------------------------------------------- 
 * Contains the functions for Interlock Command Buffer
 * 
 * -----------------------------------------------------------------------------------
 * 
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By          Modified On         Description
 * Prashant Goyal       Apr 28, 2021        Phase 5.0 - Initially Created
 * -----------------------------------------------------------------------------------
 */
module.exports = {
    /**
     * @desc Function to to Prepare and return Interlock Command Buffer
     * @param  {Number} interlockState Interlock (ON/OFF)
     */
    prepareInterlockCommandBuffer: function (interlockState) {
        try {
            //Allocating Buffer for Interlock data
            let buffer = Buffer.alloc(1280);

            //Initialize all value to 0
            buffer.fill(0);

            //Packet Type
            buffer.fill(1, 0, 1);
            buffer.fill(0, 1, 2);

            //Command Number 10027 = 0x272B
            buffer.fill(0x2B, 4, 5);
            buffer.fill(0x27, 5, 6);

            //Size of Body 1024 bytes
            buffer.fill(0x00, 8, 9);
            buffer.fill(0x04, 9, 10);
            buffer.fill(0x00, 10, 11);
            buffer.fill(0x00, 11, 12);

              //Machine Serial Id
        buffer.fill('Y30001',28,34);

            //Interlock (ON/OFF)
            buffer.fill(interlockState, 256, 257); //1:On, 0: Off

            //Returning prepared Buffer
            return buffer;
        } catch (err) {
            console.log('Error creating Interlock Buffer command')
        }
    }
}