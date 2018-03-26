const browserSync = require('browser-sync');
const historyFallback = require('connect-history-api-fallback');

let serverInstance;

module.exports = (gulp, params) => {
  gulp.task('serve', done => {
    serverInstance = browserSync.init({
      server: {
        baseDir: params.distFolder
      },
      ghostMode: false,
      middleware: [historyFallback()]
    });
    done();
  });

  gulp.task('restart', done => {
    serverInstance && serverInstance.reload();
    done();
  });
};
