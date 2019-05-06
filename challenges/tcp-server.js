const net = require('net');
const strftime = require('strftime');

var server = net.createServer(function (socket) {
  // socket handling logic
  socket.end(strftime('%F %R', new Date(Date.now())) + '\n');
});
server.listen(process.argv[2]);