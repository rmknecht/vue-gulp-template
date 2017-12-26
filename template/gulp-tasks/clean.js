/*
	clean.js
*/
import {DIST_PATH, APP_BUILD_DIR, CSS_DIR} from './paths';
import del from 'del';

// Clean all files from dist directory, except the specified folders and .gitkeep files
export function clean() {
  return del([ 
  	   DIST_PATH + '/**/*',
  	  '!'+DIST_PATH+'/**/.gitkeep', 
  	  '!'+CSS_DIR, 
  	  '!'+APP_BUILD_DIR,
  	], 
  	{ 
  	  dot: true 
  	});
}

// Clean all css from the dist directory
export function cleanCss() {
  return del([ CSS_DIR + '/**/*', '!'+CSS_DIR+'/.gitkeep' ], { dot: true });
}


// Clean all app JS from the dist directory
export function cleanApp() {
	return del([ APP_BUILD_DIR + '/**/*', '!'+APP_BUILD_DIR+'/.gitkeep' ], { dot: true });
}