// Gulp
import gulp from 'gulp';
// Path import
import { path } from './gulp/config/path.js';

// Global object of our gulp assembly
global.app = {
   path,
   gulp,
};

// Tasks import
import { copy } from './gulp/tasks/copy.js';

// Watcher
const watcher = () => {
   gulp.watch(path.watch.files, copy);
};

// Scripts for executing tasks
const mainTask = gulp.series(copy, watcher);

// Assembly gulp in action
gulp.task('copy', mainTask);
