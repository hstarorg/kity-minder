const browserSync = require('browser-sync');

let serverInstance;

module.exports = (gulp, params) => {
  gulp.task('serve', done => {
    serverInstance = browserSync.init({
      server: {
        baseDir: params.distFolder
      },
      ghostMode: false
    });
    done();
  });

  gulp.task('restart', done => {
    serverInstance.reload();
    done();
  });
};
