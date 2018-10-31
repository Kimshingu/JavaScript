const http = require('http');
let count = 0;
const server = http.createServer(function(req, res) {
  console.log('count = ', ++count);
  
  if (req.method === 'GET' && req.url === '/favicon.ico') {
    const fs = require('fs');
    fs.createReadStream(__dirname+'/'+'favicon.ico').pipe(res);
     // this replaces the call to 'end'
  } else {
    console.log(`${req.method} ${req.url}`);
    res.end('Hello world!');
  }
});

server.listen(8080,function () {
  console.log('Server is listening on port 8080');
});
