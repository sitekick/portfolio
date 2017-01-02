var gulp 	= require('gulp'),
	runSequence	= require('run-sequence'),
	watch 	= require('gulp-watch'),
	config 	= require('../config');
	
		
gulp.task('watch-D', function() {
	gulp.watch(config.scripts.src.dev, ['scripts-D']);
	gulp.watch(config.sass.src, ['sass-D']);
	gulp.watch(config.images.src, ['images-D']);
	gulp.watch(config.data.src, ['data-D']);
	//gulp.watch(config.html.src, ['html-D','inject-D']);
	watch(config.html.src, function() {
		runSequence(
		'html-D',
		'inject-D'
		);
	});
	
});