module.exports = (gulp, params) => {
  gulp.task('watch', done => {
    gulp.watch(['src/index.html', 'src/pages/**/*'], gulp.series('app.html', 'restart'));
    done();
  });
};
