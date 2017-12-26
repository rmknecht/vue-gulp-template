# {{ name }}
=========================

{{ description }}

Asset and Directory Structure
---------------
* **gulp-tasks** (Collection of Gulp related task scripts)
* **node_modules** (Node dependencies installed with NPM)
* **public** (Public document root)
	* **assets** (static assets)
	* **dist** (Distributable, comipiled, code)
			* **css** (CSS files compiled by Gulp)
			* **app** (App-related Javascript compiled by Gulp)
			* **rev-manifest.json** (Generated manifest of revisioned files)
	* **index.html** (Compiled index.html)
* **src** (Source code and assets)
	* **app** (App-related  Javascript)
	* **html** (Uncompiled html)
	* **scss** (SCSS)
		* **modules** (Site specific styling)
* **.babelrc** (Babel config)
* **.gitignore** (Untracked files)
* **gulpfile.babel.js** (Main Gulp file)
* **package.json** (NPM packages manifest)
* **README.md** (Project README file)


Frontend Toolset
---------------

This project uses [Sass](http://sass-lang.com) to process and compile CSS. [Gulp](http://gulpjs.com/) is used to monitor files, run node-sass, minify css, concatenate and minify javascript, and enable BrowserSync.

## Getting started with Gulp for the first time.
1. Install [Node](http://nodejs.org/download/) if you don't already have it.
2. Install the [Gulp](http://gulpjs.com/) package globally.

	````
	$ npm install gulp -g
	````

3. Clone this repo locally.
4. CD to the project root.
5. Run `$ npm install` to install each node package as defined in the project's packages.json dependency list.
6. Now, just run `$ npm run gulp` to start watch tasks (defined in [./gulpfile.babel.js](gulpfile.babel.js)).


Build Setup
---------------

``` bash
# install dependencies
npm install

# build, and serve with hot reload at localhost:8080
npm run dev

# Build for production
npm run build
```

Deployment
---------------
We use [DeployHQ](http://deployhq.com/) for code deployment.

DeployHQ watches the Git repository. When you push to the development or staging branches DeployHQ notices and automatically pushes those changes to the development and staging servers.

Production deployments are manually initiated using the DeployHQ website.

Application Specifics
--------------------------
### Include any additional documentation here