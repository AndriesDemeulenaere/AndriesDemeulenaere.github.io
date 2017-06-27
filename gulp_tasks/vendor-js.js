var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('vendor-js', function() {
    return gulp.src([
            './bower_components/jquery/dist/jquery.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/assets/js'));
});