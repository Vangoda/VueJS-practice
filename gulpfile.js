// Load gulp first
const {src, dest, parallel, series, watch} = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const browserify = require('browserify'); 
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

const bSync = require('browser-sync').create(); //Special syntax to init.
const reload = bSync.reload;

// CSS/SCSS related
const styleSrc = 'assets/src/scss/**/*.scss';
const styleDist = './assets/dist/css/';

// js related
const jsWatchSrc = 'assets/src/js/**/*.js';
const jsSrc = 'main.js';
const jsFolder = 'assets/src/js/';
const jsDist = './assets/dist/js/';
const jsFiles = [jsSrc];

// PHP and html
const phpFiles = '**/*.php';
const htmlFiles = '**/*.html'

// Broser sync
async function browserSync(){
  bSync.init({
    open: false,
    injectChanges: true,
    proxy: "http://course.vuejs"
  });
}

exports.browserSync = browserSync;

// Styles
// Compile scss
function scss(){
  // Compile SCSS to CSS
  // Have to return gulp stream to signal async completion
  // More info https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async
  
  return src(styleSrc) // Read the files from src folder
    .pipe(sourcemaps.init())
    .pipe(sass({ // Compile sass, specify extra opions
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console)) //Bind the errors to the console
    .pipe(autoprefixer({ // Autoprefixer, fixes css compatibility for varius browsers
      cascade: false
    }))
    .pipe(rename({suffix: '.min'})) // Add suffix .min to the filename
    .pipe(sourcemaps.write('./'))
    .pipe(dest(styleDist)) //Write the file to destination folder
    .pipe(bSync.stream())
  ;
}
// Compile scss on file change
function watchScss(){
  watch(styleSrc, scss);
}

exports.scss = scss;
exports.watchScss = watchScss;

// Javascript
// Compile javascript
function js() {
  // Loop for each src variable
  jsFiles.map(srcJs => {
    browserify({
        entries: [jsFolder + srcJs]
      })
      .transform(babelify, {
        presets: ['@babel/preset-env']
      })
      .bundle()
      .pipe(source(srcJs))
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(dest(jsDist))
      .pipe(bSync.stream())
    ;
  });
  return Promise.resolve(true);
}
// Compile javacript on file change
function watchJs(){
  watch(jsWatchSrc, js).on('change', reload);
}
exports.js = js;
exports.watchJs = watchJs;

// Trigger reload on php and html change
function watchPhp(){
  watch(phpFiles).on('change', reload);
}
exports.watchPhp = watchPhp;

function watchHtml(){
  watch(htmlFiles).on('change', reload);
}
exports.watchHtml = watchHtml;


// Default
exports.default = parallel(scss, js);

// Watch all
exports.watch = parallel(watchScss, watchJs, watchPhp, watchHtml, browserSync);