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

// Assembly gulp in action
gulp.task('copy', copy);
