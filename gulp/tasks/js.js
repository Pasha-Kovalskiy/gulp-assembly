import webpack from 'webpack-stream';

export const js = () => {
   return app.gulp
      .src(app.path.src.js, { sourcemaps: app.isDev })
      .pipe(
         webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
               filename: 'app.min.js',
            },
         })
      )
      .pipe(app.gulp.dest(app.path.dist.js))
      .pipe(app.plugins.browserSync.stream());
};
