const assets = require('../assets.json');
const concat = require('gulp-concat');
const path = require('path');

module.exports = (gulp, params) => {
  gulp.task('app.html', () => {
    return gulp.src('src/index.html').pipe(gulp.dest(params.distFolder));
  });
  gulp.task('app', gulp.parallel('app.html'));
};
