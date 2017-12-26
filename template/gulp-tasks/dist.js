/*
	dist.js
*/
import { HTTP_PATH, SRC_PATH, DIST_PATH, CSS_DIR, APP_BUILD_DIR} from './paths';
import gulp from 'gulp';
import rev from 'gulp-rev';
import revReplace from 'gulp-rev-replace';
import browserSync from 'browser-sync';

const MANIFEST = DIST_PATH+'/rev-manifest.json';

// Revision App JS.
export function distApp() {
  return gulp.src(APP_BUILD_DIR+'/*.js', {base: DIST_PATH})
  .pipe(rev())
  .pipe(gulp.dest(DIST_PATH))
  .pipe(rev.manifest(MANIFEST, {
    base: DIST_PATH,
    merge: true
  }))
  .pipe(gulp.dest(DIST_PATH))
  .pipe(browserSync.stream());
}

// Revision CSS.
export function distCss() {
  return gulp.src(CSS_DIR+'/*.min.css', {base: DIST_PATH})
  .pipe(rev())
  .pipe(gulp.dest(DIST_PATH))
  .pipe(rev.manifest(MANIFEST, {
    base: DIST_PATH,
    merge: true
  }))
  .pipe(gulp.dest(DIST_PATH))
  .pipe(browserSync.stream());
}

// revision App JS, CSS, and finally replaces instances within index.html
export function distHtml() { 
  let revManifest = gulp.src(MANIFEST);

  return gulp.src(SRC_PATH + '/html/index.html')
    .pipe(revReplace({manifest: revManifest}))
    .pipe(gulp.dest(HTTP_PATH));
}