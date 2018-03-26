const shelljs = require('shelljs');
/**
 *
 * @param {gulp} gulp
 * @param {GulpParams} params
 */
module.exports = (gulp, params) => {
  gulp.task('clean', done => {
    shelljs.rm('-rf', params.distFolder);
    done();
  });
};
