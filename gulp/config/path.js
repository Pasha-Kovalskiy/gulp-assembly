import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = './dist';
const srcFolder = './src';

export const path = {
   dist: {
      images: `${distFolder}/img/`,
      js: `${distFolder}/js/`,
      css: `${distFolder}/css/`,
      html: `${distFolder}/`,
      files: `${distFolder}/files/`,
      fonts: `${distFolder}/fonts/`,
   },
   src: {
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      js: `${srcFolder}/js/app.js`,
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
   },
   watch: {
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: distFolder,
   distFolder,
   srcFolder,
   rootFolder,
   ftp: `test`,
};
