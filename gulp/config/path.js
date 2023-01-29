import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = './dist';
const srcFolder = './src';

export const path = {
   dist: {
      js: `${distFolder}/js/`,
      css: `${distFolder}/css/`,
      html: `${distFolder}/`,
      files: `${distFolder}/files/`,
   },
   src: {
      js: `${srcFolder}/js/app.js`,
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: distFolder,
   distFolder,
   srcFolder,
   rootFolder,
   ftp: ``,
};
