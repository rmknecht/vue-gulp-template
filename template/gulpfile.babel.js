import { SRC_PATH, HTTP_PATH, SCSS_DIR } from './gulp-tasks/paths'; // Common paths

import gulp from 'gulp';
import browserSync from 'browser-sync';
import styles from './gulp-tasks/styles';
import { appWatch, appBuild } from './gulp-tasks/app';
import { clean, cleanCss, cleanApp } from './gulp-tasks/clean';
import { distApp, distCss, distHtml } from './gulp-tasks/dist';

/*
  File removal and cleanup
*/
gulp.task('clean', clean); 			// Delete everything in the dist directory
gulp.task('clean:css', cleanCss); 	// Delete all CSS in dist directory
gulp.task('clean:app', cleanApp); 	// Delete all App JS in dist directory


/*
  Process our sass
*/
gulp.task('styles', ['clean:css'], styles); 


/*
  Process our App JS
*/
gulp.task('app:dev', appWatch);						// Build the app for development, then watch the vue app for changes and hot replace.
gulp.task('app:build', ['clean:app'], appBuild);	// Build the app for production environments. Disables Vue's dev mode.


/*
  Process our HTML
*/
gulp.task('html:dev', function(){ 	// Copy src html to public directory. Do not replace any CSS or JS paths.
	return gulp.src(SRC_PATH + '/html/index.html')
      .pipe(gulp.dest(HTTP_PATH));
});

gulp.task('html:reload', ['html:dev'], function () {
    browserSync.reload();
});


/*
  Revision CSS and JS, replace HTML.
*/
gulp.task('dist:css', ['styles'], distCss); 				// revision CSS
gulp.task('dist:app', ['app:build'], distApp); 				// revision App JS
gulp.task('dist:html', ['dist:css', 'dist:app'], distHtml);	// revision App JS, CSS, and finally replaces instances within index.html\



/*
  Our default gulp tasks.
*/
browserSync.create();

gulp.task('watch', ['dist:css', 'app:dev', 'html:dev'], function() { // Watch for file changes, serve app locally, enable vue dev mode and hot module replacement
  browserSync.init({
  	server: {
		baseDir: './public/'
	}
  });

  gulp.watch(SCSS_DIR + '/**/*.scss', ['dist:css']); // Watch .scss files

  gulp.watch(SRC_PATH + '/html/index.html', ['html:reload']); // Watch index.html for changes and reload browserSync
});


gulp.task('dist', ['dist:html'], function() { return; }); // Build app for production


gulp.task('default', ['watch'], function(){}); // `$ gulp` runs watch task 
