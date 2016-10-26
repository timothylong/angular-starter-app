var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');

// Concatenate & Minify JS
gulp.task('scripts', function() {  
    return gulp.src(
        [
            'app/assets/js/vendor/angular.min.js',
            'app/assets/js/vendor/angular-route.min.js',
            'app/assets/js/vendor/angular-animate.min.js',
            'app/assets/js/lib/loading-bar.js'
        ])
    	.pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        // .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('app'));
});

gulp.task('autoprefixer', function() {
    return gulp.src('app/assets/css/style.css')
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(gulp.dest('app/assets/css'));
});

// Minify CSS
gulp.task('css', function() {
    return gulp.src('app/assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('app/assets/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/*.js', ['scripts']);
    gulp.watch('app/assets/css/*.css', ['css']);
});

// Default Task
gulp.task('default', ['scripts', 'autoprefixer', 'css', 'watch']);