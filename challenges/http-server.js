var http = require('http');
var fs = require('fs')

const [,,port, file] = process.argv;

const server = http.createServer(function (req, res) {
  fs.createReadStream(file).pipe(res);
});
server.listen(port);