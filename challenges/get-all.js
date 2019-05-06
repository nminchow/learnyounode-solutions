const request = require('request');

request(process.argv[2], (error, result, body) => {
  console.log(body.length);
  console.log(body);
});