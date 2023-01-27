import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = './dist';
const srcFolder = './src';

export const path = {
   dist: `${distFolder}/files/`,
   src: {
      files: `${srcFolder}/files/**/*.*`,
   },
   watch: {},
   clean: distFolder,
   distFolder,
   srcFolder,
   rootFolder,
   ftp: ``,
};
