var gulp = require('gulp');

gulp.task('watch', function() {

    gulp.watch('./app/assets/scripts/**/*.js', { interval: 500 }, ['scripts']);
    gulp.watch('./app/**/*.html', { interval: 500 }, ['html']);
    gulp.watch('./app/assets/sass/**/*.scss', { interval: 500 }, ['sass']);
    gulp.watch(['./app/assets/images/**/*'], { interval: 500 }, ['images']);

});