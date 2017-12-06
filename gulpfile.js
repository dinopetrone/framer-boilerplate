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

    gulp.src('src/css/**/*.css')
    .pipe(gulp.dest(buildPath))

    gulp.src('src/vendor/framer/images/**/*.{png, jpg, svg}')
    .pipe(gulp.dest(path.join(buildPath, 'framer/images')))
})

gulp.task('default', ['watch', 'serve']);

gulp.task('serve', function(){
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



// var ts = require('gulp-typescript');
// var gulp = require('gulp');
// var coffee = require('gulp-coffee');
// var gutil = require('gulp-util');
// var watch = require('gulp-watch');





// gulp.task('default', ['build', 'watch']);

// gulp.task('build', ['copy', 'coffee', 'sketch']);

// gulp.task('copy', function () {
//     gulp.src('src/index.html')
//         .pipe(gulp.dest('build'))
//     gulp.src('src/lib/**/*.*')
//         .pipe(gulp.dest('build/lib'))
//     gulp.src('src/images/**/*.{png, jpg, svg}')
//         .pipe(gulp.dest('build/images'))
// })



// gulp.task('watch', function () {

//     gulp.watch('./src/*.coffee', ['coffee'])
//     gulp.watch('./src/*.sketch', ['sketch'])
//     gulp.watch('./src/*.ts', ['typescript'])

//     browserSync({
//         server: {
//             baseDir: 'build'
//         },
//         browser: 'google chrome',
//         injectChanges: false,
//         files: ['build/**/*.*'],
//         notify: false
//     })

// })

// gulp.task('typescript', function () {
//     return gulp.src('src/**/*.ts')
//         .pipe(ts({
//             noImplicitAny: true,
//             outFile: 'main.js'
//         }))
//         .pipe(gulp.dest('build/js'));
// });

// gulp.task('coffee', function () {
//     gulp.src('src/modules/*.coffee')
//         .pipe(coffee({ bare: true }).on('error', gutil.log))
//         .pipe(gulp.dest('build/modules/'))
// })


// gulp.task('sketch', function () {

//     gulp.src('src/sketch/*.sketch')
//         .pipe(sketch({
//             export: 'slices',
//             format: 'png',
//             saveForWeb: true,
//             scales: 1.0,
//             trimmed: false,
//         }))
//         .pipe(gulp.dest('build/images'))
// })
