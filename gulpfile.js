var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// var jsFiles = 
// 		'src/assets/lib/angular/angular.min.js',
// 		'src/assets/lib/angular/angular-route.min.js',
// 		'src/assets/lib/angular/angular-animate.min.js',
// 		'src/assets/lib/loading-bar.js',
// 		'src/assets/lib/jquery.min.js',
//     jsDest = 'dist';

// Concatenate & Minify JS
gulp.task('scripts', function() {  
    return gulp.src(
        [
            'src/assets/lib/angular/angular.min.js',
            'src/assets/lib/angular/angular-route.min.js',
            'src/assets/lib/angular/angular-animate.min.js',
            'src/assets/lib/loading-bar.js',
            'src/assets/lib/jquery.min.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// // Concatenate & Minify JS
// gulp.task('scripts', function() {
//     return gulp.src('src/*.js')
//         .pipe(concat('app.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(rename('app.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'));
// });

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['scripts', 'watch']);