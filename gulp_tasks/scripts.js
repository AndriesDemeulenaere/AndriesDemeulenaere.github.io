var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src([
            './app/assets/scripts/**/*.js'
        ])
        .pipe(concat('application.js'))
        .pipe(gulp.dest('./public/assets/js'));
});