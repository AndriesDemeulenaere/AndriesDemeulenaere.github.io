var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('vendor-css', function () {
    return gulp.src([
            './bower_components/normalize-css/normalize.css'
        ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./public/assets/css'));
});