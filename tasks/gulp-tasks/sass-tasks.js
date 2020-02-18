// Area23 - SASS Tasks
// v4.0.0

// Purpose:
// Compile SASS, autoprefix css, & sourcemap
// Watch SASS

// 1. PACKAGES
// 2. IMPORTS
// 3. FUNCTIONS
// 4. EXPORTS

'use strict';

// ================= //
// 1. PACKAGES       //
// ================= //

const { src, lastRun, dest, watch, series } = require('gulp');

const sass          = require('gulp-sass');
const sassGlob      = require('gulp-sass-glob');
const autoprefixer  = require('gulp-autoprefixer');
// NOTE: `gulp-autoprefixer` uses key browserslist in package.json
// ^^^^ read more at https://github.com/postcss/autoprefixer#options
const touch         = require('gulp-touch-cmd');


// ================= //
// 2. IMPORTS        //
// ================= //

const config = require('../config-workflow.json');


// ================= //
// 3. FUNCTIONS      //
// ================= //


function compile_sass(done) {

  return src(config.src.sassSrc)
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [
    ]
    })
    .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest(config.src.css))
    .pipe(touch());
    done()
}

function watch_sass() {
  return watch(config.src.sassSrc,
    series(compile_sass)
  );
}

// ================= //
// 4. EXPORTS        //
// ================= //

exports.compile = compile_sass
exports.watch = watch_sass
