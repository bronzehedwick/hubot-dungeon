var gulp = require('gulp'),
    eslint = require('gulp-eslint');

// Source linting
gulp.task('lint', function(done) {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

// Tests linting
gulp.task('lint_tests', function(done) {
  return gulp.src('test/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

// Default task
gulp.task('default', ['lint', 'lint_tests']);
