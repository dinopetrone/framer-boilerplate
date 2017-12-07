const path = require('path');
const gulp = require('gulp');
var webpack = require('webpack-stream');
const buildPath = path.resolve(__dirname, "./build")
var browserSync = require('browser-sync');
var sketch = require('gulp-sketch');


gulp.task('client', () => {
    webpack(require('./webpack.config.js'))
        .pipe(gulp.dest(buildPath))
});


gulp.task('watch', ['copy', 'client', 'sketch'], () => {
    gulp.watch(['src/**/*'], ['copy', 'client']);
    gulp.watch(["src/**/*.sketch"], ['sketch'])
});

gulp.task('copy', function () {
    gulp.src('src/vendor/framer/framer.js')
        .pipe(gulp.dest(buildPath))

    gulp.src('src/index.html')
        .pipe(gulp.dest(buildPath))

    gulp.src('src/images/**/*.{png, jpg, svg}')
        .pipe(gulp.dest(path.join(buildPath, 'images')))

    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest(path.join(buildPath, 'fonts')))

    gulp.src('src/css/**/*.css')
        .pipe(gulp.dest(buildPath))

    gulp.src('src/vendor/framer/images/**/*.{png, jpg, svg}')
        .pipe(gulp.dest(path.join(buildPath, 'framer/images')))
})

gulp.task('default', ['watch', 'serve']);

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'build'
        },
        browser: 'google chrome',
        injectChanges: false,
        files: ['build/**/*.*'],
        notify: false
    })

})

gulp.task('sketch', function () {

    gulp.src('src/sketch/*.sketch')
        .pipe(sketch({
            export: 'slices',
            format: 'png',
            saveForWeb: true,
            scales: 1.0,
            trimmed: false,
        }))
        .pipe(gulp.dest('build/images'))
})

