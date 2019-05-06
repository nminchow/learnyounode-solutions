const filtered = require("./filtered");

const [,,directory, extension] = process.argv;

filtered(directory, extension, (err, result) => {
  if(err) return console.log(err);
  result.forEach((item) => {
    console.log(item);
  })
})