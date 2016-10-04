var gulp = require('gulp');
var del = require('del'),
    webpack = require('webpack-stream'),
    named = require('vinyl-named'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

var b = 'bower_components/';

//************ Clean WWWROOT ******
gulp.task('clean', function () {
    return del(['wwwroot/**/*']);
});

//*************** SASS ****************
gulp.task('copy:sass', function () {
    return gulp.src("www/style/**/*.css")
        .pipe(gulp.dest("wwwroot/css/"))
});

//************** SCRIPTS ********************
gulp.task('copy:scripts', function () {
    return gulp.src("www/scripts/**/*.js")
        .pipe(gulp.dest("wwwroot/js/"))
});

//************** COMPONENTS ********************
gulp.task('copy:components', function () {
    return gulp.src("www/components/HelloWorld.tsx")
        .pipe(named())
        .pipe(webpack({
            watch: false,
            module: {
                loaders: [
                    { test: /\.tsx$/, loader: 'ts-loader' }
                ],
                resolve: {
                    extensions: ['', '.js', '.jsx', '.json', 'tsx', 'ts']
                },
            }
        }))
        .pipe(gulp.dest("wwwroot/components/"))
});

//************** STATIC LIBS ********************
gulp.task('copy:static_libs', function () {
    return gulp.src("www/libs/**/*.js")
        .pipe(gulp.dest("wwwroot/libs/"))
});

//************** LIBRARYS ********************
gulp.task('copy:lib', function () {
    return gulp.src([b + 'react/*.js'])
        .pipe(gulp.dest('wwwroot/libs/'));
});

//****
gulp.task('js-watch', ['copy:sass', 'copy:scripts', 'copy:static_libs', 'copy:components'], function (done) {
    browserSync.reload();
    done();
});

//************ LiveReload Watch ***************
gulp.task('watch', function () {
    browserSync.init({
        proxy: "localhost:5000"
    });

    gulp.watch('www/style/**/*.css', ['copy:sass', 'js-watch']);
    gulp.watch('www/scripts/**/*.js', ['copy:scripts', 'js-watch']);
    gulp.watch('www/libs/**/*.js', ['copy:static_libs', 'js-watch']);
    gulp.watch('www/components/**/*.tsx', ['copy:components', 'js-watch']);

    //Refresh browser
    gulp.watch(['wwwroot/**/*.*', 'Views/**/*.*']).on('change', browserSync.reload);
});

gulp.task('default', ['clean'], function () {
    gulp.start('copy:sass', 'copy:scripts', 'copy:lib', 'copy:static_libs', 'copy:components', 'watch');
});

gulp.task('deploy', ['clean'], function () {
    gulp.start('copy:sass', 'copy:scripts', 'copy:lib', 'copy:static_libs', 'copy:components');
});