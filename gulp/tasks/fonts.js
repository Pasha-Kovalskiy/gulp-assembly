import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
   return app.gulp
      .src(`${app.path.srcFolder}/fonts/*.otf`, {})
      .pipe(
         fonter({
            formats: ['ttf'],
         })
      )
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
   return app.gulp
      .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
      .pipe(
         fonter({
            formats: ['woff'],
         })
      )
      .pipe(app.gulp.dest(`${app.path.dist.fonts}`));
};

export const ttfToWoff2 = () => {
   return app.gulp
      .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
      .pipe(ttf2woff2())
      .pipe(app.gulp.dest(`${app.path.dist.fonts}`));
};

export const fontsStyle = (cb) => {
   // Fonts file
   const fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
   // Check if fonts files exists
   fs.readdir(app.path.dist.fonts, (err, fontsFiles) => {
      if (fontsFiles) {
         // Check if style files exists
         if (!fs.existsSync(fontsFile)) {
            // If there is no file - create it
            fs.writeFile(fontsFile, '', (err) => {
               if (err) throw new Error(err);
            });
            let newFileOnly;
            for (let i = 0; i < fontsFiles.length; i++) {
               // Write fonts connection to styles file
               let fontFileName = fontsFiles[i].split('.')[0];
               if (newFileOnly !== fontFileName) {
                  let fontName = fontFileName.split('-')[0]
                     ? fontFileName.split('-')[0]
                     : fontFileName;
                  let fontWeight = fontFileName.split('-')[1]
                     ? fontFileName.split('-')[1]
                     : fontFileName;
                  if (fontWeight.toLowerCase() === 'thin') {
                     fontWeight = 100;
                  } else if (fontWeight.toLowerCase() === 'extralight') {
                     fontWeight = 200;
                  } else if (fontWeight.toLowerCase() === 'light') {
                     fontWeight = 300;
                  } else if (fontWeight.toLowerCase() === 'medium') {
                     fontWeight = 500;
                  } else if (fontWeight.toLowerCase() === 'semibold') {
                     fontWeight = 600;
                  } else if (fontWeight.toLowerCase() === 'bold') {
                     fontWeight = 700;
                  } else if (
                     fontWeight.toLowerCase() === 'extrabold' ||
                     fontWeight.toLowerCase() === 'heavy'
                  ) {
                     fontWeight = 800;
                  } else if (fontWeight.toLowerCase() === 'black') {
                     fontWeight = 900;
                  } else {
                     fontWeight = 400;
                  }
                  fs.appendFile(
                     fontsFile,
                     `@font-face {\n\tfont-family: '${fontName}';\n\tfont-display: swap;\n\tsrc: url('../fonts/${fontFileName}.woff2') format('woff2'), url('../fonts/${fontFileName}.woff') format('woff');\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
                     cb
                  );
                  newFileOnly = fontFileName;
               }
            }
         } else {
            // If fie exists - log out message
            console.log(
               'File scss/fonts.scss already exists. In order to rewrite it you need to delete it.'
            );
         }
      }
   });
   cb();
};
