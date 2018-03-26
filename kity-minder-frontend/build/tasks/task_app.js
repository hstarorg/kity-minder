const assets = require('../assets.json');
const concat = require('gulp-concat');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

/**
 *
 * @param {*} gulp
 * @param {GulpParams} params
 */
module.exports = (gulp, params) => {
  gulp.task('app.html', () => {
    return gulp.src(['src/index.html', 'src/page[s]/**/*.html']).pipe(gulp.dest(params.distFolder));
  });
  gulp.task('app.js', done => {
    const compiler = webpack(webpackConfig);
    if (params.minify) {
      compiler.run((err, stats) => {
        if (err) {
          console.error(err);
        }
        console.log(stats.toString());
        gulp.series('restart')();
        done();
      });
    } else {
      compiler.watch({ aggregateTimeout: 500, poll: false, ignored: [/modules/, /dist/] }, (err, stats) => {
        if (err) {
          console.error(err);
        }
        console.log(stats.toString());
        gulp.series('restart')();
        done();
      });
    }
  });
  gulp.task('app', gulp.parallel('app.html', 'app.js'));
};
