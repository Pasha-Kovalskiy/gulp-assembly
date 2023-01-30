// Gulp
import gulp from 'gulp';
// Path import
import { path } from './gulp/config/path.js';
//Import common plugins
import { plugins } from './gulp/config/plugins.js';

// Global object of our gulp assembly
global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
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
import { images } from './gulp/tasks/images.js';
import {
   otfToTtf,
   ttfToWoff,
   ttfToWoff2,
   fontsStyle,
} from './gulp/tasks/fonts.js';
import { svgIcons } from './gulp/tasks/svgIcons.js';
import { zip } from './gulp/tasks/zip.js';

const copyFiles = gulp.parallel(copy, html, scss, js, images);
const fonts = gulp.series(otfToTtf, ttfToWoff, ttfToWoff2, fontsStyle);
const mainTask = gulp.series(reset, gulp.series(fonts, copyFiles));

// Watcher
const watcher = () => {
   gulp.watch(path.watch.files, copyFiles);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
};

// Scripts for executing tasks
const dev = gulp.series(mainTask, gulp.parallel(watcher, server));
const build = gulp.series(mainTask);
const deployZIP = gulp.series(mainTask, zip);

export { dev };
export { build };
export { deployZIP };

// Assembly gulp in action
gulp.task('svgicons', svgIcons);
gulp.task('fonts', fonts);
gulp.task('build', build);
gulp.task('dev', dev);
gulp.task('zip', deployZIP);
