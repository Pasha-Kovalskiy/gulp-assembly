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
import { reset } from './gulp/tasks/reset.js';

const refreshFolderTask = gulp.series(reset, copy);

// Watcher
const watcher = () => {
   gulp.watch(path.watch.files, refreshFolderTask);
};

// Scripts for executing tasks
const mainTask = gulp.series(refreshFolderTask, watcher);

// Assembly gulp in action
gulp.task('default', mainTask);
