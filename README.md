1. Make sure you have these installed
	- [node.js](http://nodejs.org/)
	- [git](http://git-scm.com/)
	- [gulp](http://gulpjs.com/)
	- [ruby](http://gulpjs.com/)

2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) `$ git clone https://github.com/anthonyjdoolan/workflow.git`
3. CD to the folder into directory
4. Install gulp.js via the Mac terminal or Gitbash on a PC 
	1. `$ npm install gulp --save-dev && npm install gulp-ruby-sass --save-dev`
	2. We've added --save-dev, which tells the computer to add gulp and ruby-sass as a dev dependency in package.json
5. Review the gulpfile and make sure file paths are correct. This gulpfile assumes your using assets/* as structure
	1. To test the sass and verify file paths are correct, Ive made a short scss file in assets/scss. 
		once you run `$ gulp` a 'styles.css' file should be created in assets/css. 
	2. To verify the watch function is working add some css to `assets/scss/styles.css` file and check it against `assets/css/styles.css`.
6. Install the optional packages via '$ npm install --save-dev <"dependency">'
	1. gulp-jshint
	3. gulp-sourcemaps
	4. gulp-webserver
	5. jshint
	6. try running: This script installs all but the webserver. 
		npm install --save-dev gulp-jshint && npm install --save-dev gulp-sourcemaps && npm install --save-dev jshint
		- NOTE -- IF YOU INSTALL THESE PACKAGES YOU WILL HAVE TO CHANGE THE GULPFILE.JS TO USE THEM.
7. Run the Gulp command  `$ gulp`