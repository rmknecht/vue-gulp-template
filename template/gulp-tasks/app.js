/*
  app.js
*/

import { SRC_PATH, APP_BUILD_DIR } from './paths';

import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import rename from 'gulp-rename';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';
import babelify from 'babelify';
import vueify from 'vueify';
import hmr from 'browserify-hmr';
import watchify from 'watchify';
import uglify from 'gulp-uglify';
import envify from 'envify';


/*

Development build

Build the app for development, then watch the vue app for changes and rebuild.

*/
export function appWatch() {
  const b = browserify({
    entries: SRC_PATH+'/app/main.js',
    plugin: [hmr, watchify],
    transform: [vueify, babelify],
    debug: true,
    cache: {},
    packageCache: {}
  });


  function bundle() {
    b.bundle()
    .on('error', err => {
      util.log('Browserify Error', util.colors.red(err.message));
    })
    .pipe(source('app.js'))
    .pipe(rename('build.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(APP_BUILD_DIR));
  }

  b.on('update', bundle);

  bundle();
}


/*

Production build

*/

export function appBuild() {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: SRC_PATH+'/app/main.js',
    debug: true,
    transform: [
      vueify,
      babelify,
      ['envify', {'global': true, '_': 'purge', NODE_ENV: 'production'}]
    ]
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(rename('build.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', console.log)
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(APP_BUILD_DIR));
}