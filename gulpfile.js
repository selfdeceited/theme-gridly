// requirements
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less-sourcemap'),
    path = require('path');
    
gulp.task('default', ['less', 'uglify']);

gulp.task('less', function() {
  
  // easier to read variable
  var themeName = 'gridly';
  
  // less
  return gulp.src('./assets/less/' + themeName + '.less')
    .pipe(less({ paths: [path.join(__dirname, 'less', 'includes')]}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('uglify', function() {
  
  // easier to read variable
  var themeName = 'gridly';
  
  // uglify
  return gulp.src('./assets/js/' + themeName + '.js')
    .pipe(uglify())
    .pipe(rename(themeName + '.min.js'))          
    .pipe(gulp.dest('./assets/js/'));
});