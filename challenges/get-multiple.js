const request = require('request');

const urls = process.argv.slice(2, 5);
const results = [];

const printResults = () => {
  results.forEach(item => {
    console.log(item.content);
  })
};

urls.forEach((url, index) => {
  request(url, (error, result, body) => {
    results[index] = {
      content: body,
      length: body.length,
      index
    };
    if (results.length === 3) printResults();
  });
});
