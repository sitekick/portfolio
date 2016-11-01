var gulp 	= require('gulp'),
	cache = require('gulp-cached'),
	config 	= require('../config');

/**
 * Copy libraries to build folder
 * if not changed
 */
gulp.task('libraries-D', function() {
  return gulp.src(config.lib.src)
    .pipe(cache('lib'))
    .pipe(gulp.dest(config.lib.dest.dev));
});

gulp.task('libraries-P', function() {
  return gulp.src(config.lib.src)
    .pipe(gulp.dest(config.lib.dest.prod));
});