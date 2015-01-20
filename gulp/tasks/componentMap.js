var gulp        = require('gulp');
var config      = require('../config').browserify;
var findFiles   = require('find');
var path        = require('path');
var fs          = require('fs');

gulp.task('componentMap', function() {
  findFiles.file(/\.(js)|(es6)$/, config.src, function(files) {

    files = files.filter(function(file) {
        return path.dirname(path.relative(config.src, file)) !== '.'; // Reject files in the root of /components
      }).map(function(file) {
      file = path.relative(config.src, file);
      var fileProp = file.replace(/\.[^/.]+$/, "");
      return (
        '"' + fileProp + '"' +
        ':' +
        ' require(' +
        '"./' + file + '"' +
        ')'
        );
      });

    var data = 'module.exports = {\n\t' +
      files.join(',\n\t') +
      '\n};';


    fs.writeFileSync(config.src + '/component-map.js', data);
  });

});