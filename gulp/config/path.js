import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = './dist';
const srcFolder = './src';

export const path = {
   dist: {
      html: `${distFolder}/`,
      files: `${distFolder}/files/`,
   },
   src: {
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   watch: {
      html: `${srcFolder}/**/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: distFolder,
   distFolder,
   srcFolder,
   rootFolder,
   ftp: ``,
};
