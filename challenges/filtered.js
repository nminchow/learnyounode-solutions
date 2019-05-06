var fs = require('fs');

const [,,directory, extension] = process.argv;

const print = (path) => {
  if(!path.endsWith(`.${extension}`)) return;
  console.log(path);
}

fs.readdir(directory, (error, data) => {
  data.forEach(print);
})
