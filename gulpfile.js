var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var jsFiles = 
		'/src/assets/lib/angular/angular.min.js',
		'/src/assets/lib/angular/angular-route.min.js',
		'/src/assets/lib/angular/angular-animate.min.js',
		'/src/assets/lib/loading-bar.js',
		'/src/assets/lib/jquery.min.js',
    jsDest = '/dist/';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});