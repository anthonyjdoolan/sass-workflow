var gulp = require('gulp'); // Initialize the Gulp Diectory in node_modules
var sass = require('gulp-ruby-sass'); // Init var for gulp-sass
gulp.task('sass', function () {
	return sass('assets/scss/styles.scss')  // get source files with gulp.src
		.on('error', sass.logError)        
		.pipe(gulp.dest('assets/css'));// Outputs the file in the destination folder
});
gulp.task('watch', function() {
  gulp.watch(['assets/scss/*.scss'], ['sass']);
});
gulp.task('default', ['watch', 'sass']);