const gulp = require('gulp');
const util = require('./util');

const minify = process.argv.includes('--minify');

const params = {
  minify,
  distFolder: util.root('dist')
};

// Load tasks
util.loadTasks(gulp, params, util.root('build/tasks'));

gulp.task('dev', gulp.series('clean', 'assets', gulp.parallel('serve', 'watch')));

gulp.task('build', gulp.series('clean', 'assets'));
