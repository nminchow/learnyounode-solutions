var fs = require('fs');

const filter = (extension) => { return (path) => {
  if(!path.endsWith(`.${extension}`)) return;
  return path;
}};

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, (error, data) => {
    if(error) return callback(error);
    const paths = data.map(filter(extension)).filter(n => n);
    callback(null, paths);
  })
}
