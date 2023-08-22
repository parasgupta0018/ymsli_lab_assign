/**
 * Project Name : Relay Server
 * @company YMSLI
 * @author  Akanshu Raj
 * @date    Mar 14, 2022
 * Copyright (c) 2022, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * 
 * Module: Buffers
 * Description
 * ----------------------------------------------------------------------------------- 
 * Contains the functions to Create ReadEx Command Buffer for sending to Machines
 * 
 * This module has following public functions:
 * 1. prepareReadExCommandBuffer                - Function to Prepare and return ReadEx Command Buffer
 * 
 * -----------------------------------------------------------------------------------
 * 
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By          Modified On       Description
 * Akanshu Raj          Mar 14, 2022      Phase 11.0 - Initially Created
 * -----------------------------------------------------------------------------------
 */
 module.exports = {
    /**
     * @desc Function to to Prepare and return ReadEx Command Buffer
     * @param  commandNo
     * @param  parameter_1
     * @param  parameter_2
     * @param  parameter_3
     * @param  boardName
     */
    prepareReadExCommandBuffer: function (commandNo, parameter_1, parameter_2, parameter_3, boardName) {
        try {
            var buffer = Buffer.alloc(1280);

            //Initialize all value to 0
            buffer.fill(0);

            //Type
            buffer.fill(1, 0, 1);
            buffer.fill(0, 1, 2);

            //Version
            buffer.fill(18, 2, 3);
            buffer.fill(0, 3, 4);

            //Command No (206)
            buffer.fill(206, 4, 5);
            buffer.fill(0, 5, 6);

            //Setting Body Size 1024
            buffer.fill(0x00, 8, 9);
            buffer.fill(0x04, 9, 10);
            buffer.fill(0x00, 10, 11);
            buffer.fill(0x00, 11, 12);

            //parameter_1
            buffer.fill(parameter_1, 12, 13);
            buffer.fill(0, 13, 14);
            buffer.fill(0, 14, 15);
            buffer.fill(0, 15, 16);

            //parameter_2
            buffer.fill(parameter_2, 16, 17);
            buffer.fill(0, 17, 18);
            buffer.fill(0, 18, 19);
            buffer.fill(0, 19, 20);

            //parameter_3
            buffer.fill(parameter_3, 20, 21);
            buffer.fill(0, 21, 22);
            buffer.fill(0, 22, 23);
            buffer.fill(0, 23, 24);

              //Machine Serial Id
              buffer.fill('Y30001',28,34);

            var boardNameBuffer = Buffer.alloc(256);
            boardNameBuffer.write(boardName);
            //Copy Board Name Buffer to ReadEx Command Buffer
            boardNameBuffer.copy(buffer, 256);
            
            //Returning prepared Buffer
            return buffer;
        } catch (err) {
            console.log('Eroor occurred while preparing Readex Buffer');
        }
    }
}