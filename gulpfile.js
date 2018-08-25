'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const server = require('browser-sync').create();
const minify = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const run = require('run-sequence');
const del = require('del');

gulp.task('style', () => {
  gulp.src('src/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(gulp.dest('build/css'))
  .pipe(minify())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream());
});

gulp.task("serve", () => {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  
  gulp.watch('src/sass/**/*.{scss,sass}', ['style']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('build', (done) => {
  run(
    'clean',
    'copy',
    'style',
    done
  );
});

gulp.task('copy', () => {
  return gulp.src([
    'src/fonts/**/*.{otf}',
    'src/img/**',
    'src/js/**'
  ], {
    base: 'src'
  })
  .pipe(gulp.dest('build'));
});

gulp.task('clean', () => {
  return del('build');
});