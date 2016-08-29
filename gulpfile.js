var gulp = require('gulp');
var sass = require('gulp-sass');
//var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('default',['sass','watch','serve']);

//my task sass
gulp.task('sass', function () {
  return gulp.src('*.scss')
    //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


gulp.task('watch', function() {
  gulp.watch('/*.scss', ['sass']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "*./"
        }
    });
});

