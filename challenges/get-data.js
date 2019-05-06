const http = require('http');

http.get(process.argv[2], (resp) => {
  resp.setEncoding('utf8');

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    console.log(chunk);
  });
});