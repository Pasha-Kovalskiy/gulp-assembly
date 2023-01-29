import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCSS from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
   return app.gulp
      .src(app.path.src.scss, { sourcemaps: true })
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      .pipe(
         sass({
            outputStyle: 'expanded',
         })
      )
      .pipe(gcmq())
      .pipe(
         autoPrefixer({
            grid: true,
            overrideBrowserlist: ['last 5 versions'],
            cascade: true,
         })
      )
      .pipe(app.gulp.dest(app.path.dist.css))
      .pipe(cleanCSS())
      .pipe(
         rename({
            extname: '.min.css',
         })
      )
      .pipe(app.gulp.dest(app.path.dist.css))
      .pipe(app.plugins.browserSync.stream());
};
