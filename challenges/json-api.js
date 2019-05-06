const url = require('url');
const http = require('http');

const getResponse = function getResponse({ pathname, query }) {
  const date = new Date(query.slice(4));
  if(pathname === "/api/parsetime") {
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  }

  return {
    unixtime: date.valueOf()
  };
};

http.createServer(function (req, res) {
  var result = getResponse(url.parse(req.url));

  res.end(JSON.stringify(result));
}).listen(process.argv[2]);