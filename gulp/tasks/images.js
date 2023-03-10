import imagemin from 'gulp-imagemin';

export const images = () => {
   return app.gulp
      .src(app.path.src.images)
      .pipe(app.plugins.newer(app.path.dist.images))
      .pipe(
         app.plugins.if(
            app.isBuild,
            imagemin({
               progressive: true,
               svgoPlugins: [{ removeViewBox: false }],
               interlaced: true,
               optimizationLevel: 3,
            })
         )
      )
      .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.dist.images)))
      .pipe(app.gulp.src(app.path.src.svg))
      .pipe(app.gulp.dest(app.path.dist.images))
      .pipe(app.plugins.browserSync.stream());
};
