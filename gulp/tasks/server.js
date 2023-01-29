export const server = () => {
   app.plugins.browserSync.init({
      server: {
         baseDir: `${app.path.dist.html}`,
      },
      notify: false,
      port: 3000,
   });
};
