let counter=0;
let totalSize = 0;
module.exports = {

  startReportServer: () => {
    const net = require('net');
    let client = null;
    const server = net.createServer((c) => {
      // 'connection' listener.
      client = c;
      console.log('client connected at Report Port');
      
      c.on('connect', () =>{
        // counter=0;
        // totalSize = 0;
      })
      c.on('end', (err) => {
        console.log('client disconnected at Report Port');
        console.log(err);
      });
      c.on('data',(data)=>{
        let date = new Date(Date.now());
        totalSize += data.length;
        console.log(`******REPORT_RESPONSE*******, Timestamp: ${date.toLocaleString()}, TotalBytesRead: ${totalSize}, NumberOfReports: ${totalSize/1280}, Counter: ${counter++}`);

        // if(counter > 0 && counter % 2000 == 0){
        //   c.pause();
        //   setTimeout(() => {
        //     c.resume();
        //   }, 20000);
        // }

        // setTimeout(() => {
        //   throw new Error('connection error');
        // }, 10000);
        
        // if(counter >= 2000){
        //   // c.destroy()
        //   throw new Error('connection error');
        // }
        
      });
      c.on('error', (err) => {
        console.log('client disconnected at Report Port due to error: ' + err.message, Date.now())
      });
      c.on('close', () => {
        console.log('client close at Report Port');
      });
      // c.write('hello server 1\r\n');
      // c.pipe(c);
    });

    server.on('error', (err) => {
      console.log(`Error Occurred in Report Port: ${err}`);
    });

    server.on('close', (err) => {
      console.log("Server close at Report Port")
    });

    server.listen(5001, () => {
      console.log('server bound at Report Port');
    });
  }
}