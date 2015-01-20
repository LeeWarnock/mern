var gulp = require('gulp');

gulp.task('build', ['componentMap', 'browserify', 'sass', 'images']);
