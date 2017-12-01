var gulp 			= require('gulp'),
	browserSync 	= require('browser-sync'),
	autoprefixer 	= require('gulp-autoprefixer'),
	sass			= require('gulp-sass'),
	minifycss 		= require('gulp-uglifycss'),
	uglify 			= require('gulp-uglify'),
	rename			= require('gulp-rename'),
	concat 			= require('gulp-concat');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'progressive-image-loading/src/'
		}
	});
});

gulp.task('styles', function() {
	gulp.src('./progressive-image-loading/src/progressive-image-loading.scss')
		.pipe(sass({
			'outputStyle': 'compressed'
		}))
		.pipe(autoprefixer('last 3 version', '>1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('./progressive-image-loading/src'))
		.pipe(gulp.dest('./progressive-image-loading/dist'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss({
			maxLineLen: 80
		}))
		.pipe(gulp.dest('./progressive-image-loading/dist'))
		.pipe(browserSync.stream())
});

gulp.task('scriptsJs', function() {
	gulp.src('./progressive-image-loading/src/*.js')
		.pipe(concat('progressive-image-loading.js'))
		.pipe(gulp.dest('./progressive-image-loading/dist'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./progressive-image-loading/dist'))
		.pipe(browserSync.stream())
});

gulp.task('default', ['styles', 'scriptsJs', 'browser-sync'], function() {
	gulp.watch('./progressive-image-loading/src/*.scss', ['styles']);
	gulp.watch('./progressive-image-loading/src/*.js', ['scriptsJs']);
});

gulp.task('build', ['styles', 'scriptsJs']);