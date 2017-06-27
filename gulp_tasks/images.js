var gulp = require('gulp');

gulp.task('images', function() {
    gulp.src(['./app/assets/images/*'])
        .pipe(gulp.dest('./public/assets/images'));
});