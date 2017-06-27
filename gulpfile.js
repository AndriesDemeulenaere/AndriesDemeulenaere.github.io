var gulp = require('gulp');
var connect = require('gulp-connect');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp_tasks');

gulp.task('build', [
	'html',
	'images',
	'sass',
	'scripts',
	'vendor-css',
	'vendor-js'
]);

gulp.task('default', [
	'cleanup', 
	'build', 
	'connect', 
	'watch'
]);