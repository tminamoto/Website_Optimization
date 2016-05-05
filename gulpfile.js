const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const less = require('gulp-less');  
const pleeease = require('gulp-pleeease');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

//compress javascript
gulp.task('js1', function () {
  gulp.src('./src/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//compress css
gulp.task('css1', function() {  
  gulp.src('./src/css/*.css')
    .pipe(plumber())
    .pipe(less({
     }))
    .pipe(pleeease({
        minifier: true
     }))
    .pipe(gulp.dest('dist/css'));
});

//compress images
gulp.task('img1', function() {
  var srcpath = './src/img/*.+(jpg|jpeg|png|gif|svg)';
  var dstpath = 'dist/img';
  var imageminOptions = {
                          optimizationLevel: 7,
                          use: [pngquant()]
                        };

      gulp.src(srcpath)
     .pipe(plumber())
     .pipe(imagemin(imageminOptions))
     .pipe(gulp.dest(dstpath));
 });

//compress images in another folder
gulp.task('img2', function() {
  var srcpath = './src/views/images/*.+(jpg|jpeg|png|gif|svg)';
  var dstpath = 'dist/views/images';
  var imageminOptions = {
                          optimizationLevel: 7,
                          use: [pngquant()]
                        };

      gulp.src(srcpath)
     .pipe(plumber())
     .pipe(imagemin(imageminOptions))
     .pipe(gulp.dest(dstpath));
 });


gulp.task('watch', function() {
  gulp.watch(['./src/js/*.js', './src/css/*.css'], ['default']);
});

gulp.task('default',['js1', 'css1'])
//gulp.task('img',['img1', 'img2'])


