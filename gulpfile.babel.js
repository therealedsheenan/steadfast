/*
*  Steadfast
*  Static site generator
* */

'use strict';

import path from 'path'
import gulp from 'gulp'
import del from 'del'
import browserSync from 'browser-sync'
import runSequence from 'run-sequence'
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins()

// markup task
gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe($.hb({
      partials: './src/html/partials/*.hbs'
    }))
    .pipe(gulp.dest('./build'))
})

// default task
gulp.task('default', cb => {
  return runSequence(
    'html',
    cb
  )
})

// production
// gulp.task('production')