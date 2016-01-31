 var gulp = require('gulp');
 var args = require('yargs').argv;
 var $ = require('gulp-load-plugins')({lazy: true});

 var jsPath = [
       './app/src/*.js',
       './app/src/**/*.js' 
 ];


 gulp.task('pattern', function(){
    return gulp
       .src(jsPath)
       .pipe($.if(args.verbose, $.print()))
       .pipe($.jscs())
       .pipe($.jshint())
       .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
       .pipe($.jshint.reporter('fail'));
 });






 ////////////// aux tools
