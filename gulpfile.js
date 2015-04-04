var gulp   = require('gulp'),
    eslint = require('gulp-eslint'),
    bump   = require('gulp-bump'),
    //watch  = require('gulp-watch'),
    jspath = 'src/**/*.js';

// Javascript linting
gulp.task('eslint', function(done) {
  return gulp.src(jspath)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

// Run actions on file changes
gulp.task('watch', function() {
  gulp.watch([jspath], ['eslint']);
});

// Bump version number
gulp.task('major', function() {
  gulp.src('./package.json')
  .pipe(bump({type:'major'}))
  .pipe(gulp.dest('./'));
});
gulp.task('minor', function() {
  gulp.src('./package.json')
  .pipe(bump({type:'minor'}))
  .pipe(gulp.dest('./'));
});
gulp.task('patch', function() {
  gulp.src('./package.json')
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'));
});

// Default task
gulp.task('default', ['eslint']);
