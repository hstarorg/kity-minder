const assets = require('../assets.json');
const concat = require('gulp-concat');
const path = require('path');

module.exports = (gulp, params) => {
  const suffix = params.minify ? '.min' : '';
  gulp.task('vendor.js', () => {
    return gulp
      .src(assets[`vendor.js${suffix}`])
      .pipe(concat('vendor.js', { newLine: ';;' }))
      .pipe(gulp.dest(path.join(params.distFolder, 'assets/js')));
  });
  gulp.task('vendor.css', () => {
    return gulp
      .src(assets[`vendor.css${suffix}`])
      .pipe(concat('vendor.css', { newLine: '\n\n' }))
      .pipe(gulp.dest(path.join(params.distFolder, 'assets/css')));
  });
  gulp.task('vendor', gulp.parallel('vendor.js', 'vendor.css'));
  gulp.task('assets', gulp.parallel('vendor'));
};
