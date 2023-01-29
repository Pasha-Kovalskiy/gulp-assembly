// Gulp
import gulp from 'gulp';
// Path import
import { path } from './gulp/config/path.js';
//Import common plugins
import { plugins } from './gulp/config/plugins.js';

// Global object of our gulp assembly
global.app = {
   path,
   gulp,
   plugins,
};

// Tasks import
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';

const copyFiles = gulp.parallel(copy, html, scss, js);
const mainTask = gulp.series(reset, copyFiles);

// Watcher
const watcher = () => {
   gulp.watch(path.watch.files, copyFiles);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
};

// Scripts for executing tasks
const dev = gulp.series(mainTask, gulp.parallel(watcher, server));

// Assembly gulp in action
gulp.task('default', dev);
