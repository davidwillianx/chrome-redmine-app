 var gulp =  require('gulp');
 var $ =  require('gulp-load-plugins')({lazy: true});

 var jsPath = [
       './app/src/*.js',
       './app/src/**/*.js'
 ];



 gulp.task('start', function(){
    return gulp
       src(jsPath)
       .pipe($.jscs())
       .pipe($.jshint())
       .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
       .pipe($.jshint.reporter('fail'));
 });










 ////////////// aux tools

