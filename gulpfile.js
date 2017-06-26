var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

process.stdin.setRawMode(true);

gulp.task('clean', function () {
  return gulp.src('build', { read: false })
    .pipe(plugins.clean());
});

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js'])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError());
});

gulp.task('default', ['lint']);
