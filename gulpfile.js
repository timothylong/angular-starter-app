var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

var jsFiles = 
		'app/src/assets/lib/angular/angular.min.js',
		'app/src/assets/lib/angular/angular-route.min.js',
		'app/src/assets/lib/angular/angular-animate.min.js',
		'app/src/assets/lib/loading-bar.js',
		'app/src/assets/lib/jquery.min.js',
    jsDest = 'app/dist/';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});