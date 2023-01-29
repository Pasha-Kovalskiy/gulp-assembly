import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = './dist';
const srcFolder = './src';

export const path = {
   dist: {
      css: `${distFolder}/css/`,
      html: `${distFolder}/`,
      files: `${distFolder}/files/`,
   },
   src: {
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   watch: {
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
