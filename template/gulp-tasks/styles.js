/*
  styles.js
*/

import {SCSS_DIR, CSS_DIR} from './paths';
import gulp from 'gulp';
import scss from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import prefix from 'gulp-autoprefixer';

/*
  Process our sass files and minify the resultant CSS.
*/
export default function() {
  return gulp.src(SCSS_DIR + '/styles.scss')
  .pipe(scss())
  .on('error', function (err) {
    console.log(err.message);
    this.emit('end');
  })
  .pipe(prefix({
    browsers: ['last 2 versions', '> 1%', 'IE 9', 'iOS >= 8'],
    cascade: false
  }))
  .pipe(rename('build.css'))
  .pipe(gulp.dest(CSS_DIR))
  .pipe(rename({suffix: '.min'}))
  .pipe(cssnano({autoprefixer: false, zindex: false}))
  .pipe(gulp.dest(CSS_DIR));
}