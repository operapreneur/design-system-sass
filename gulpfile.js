// Area23 -- Handlebars Web Starter Kit
// v4.0.0

// 1. PACKAGES
// 2. IMPORTS
// 3. TASKS

'use strict';

// ============================= //
// ============================= //
//      !! Gulp 4.0.0 !!         //
// ============================= //
// ============================= //

// ================= //
// 1. PACKAGES       //
// ================= //

// NOTE: Exporting tasks can be considered public or private.
// Using the gulp.task API isn't the recommended pattern anymore
// @link https://gulpjs.com/docs/en/getting-started/creating-tasks

const { parallel, series } = require('gulp');


// ================= //
// 2. IMPORTS        //
// ================= //

const config = require('./tasks/config-workflow.json');
const sass = require('./tasks/gulp-tasks/sass-tasks');

// ================= //
// 3. TASKS          //
// ================= //

// NOTE: USE `gulp --tasks` to list out all tasks

function defaultTask(cb) {
  cb(
    console.log(`
      Hi! Some of the previous gulp tasks have been removed to favor npm scripts.
      Take a look at the package.json file and view the scripts object.
      For example, running npm start replaces the previous default gulp task.
      Review the README.md for more information.
      Thanks!
    `)
  )
}

exports.default = defaultTask
exports.sass = sass.compile
exports.w_sass = sass.watch

