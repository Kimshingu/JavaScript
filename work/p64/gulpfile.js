const gulp = require('gulp');
// 노드가 컴파일 할때 사용하는 require : 웹브라우저 사용할 수 없다.
// 노드가 사용하는 컴파일러 구글 컴파일러

// require('gulp-babel');
// 'gulp-babel' 이라는 문자열로
// 노드가 서비스를 제공하거나 (노드는 지원하지 않는다.)
// node_modules : 폴더 밑에 해당 프로그램이 존재해야 한다.
// npm i gulp-babel -- save-dev
const babel = require('gulp-babel');

gulp.task('default', function(){
  //노드소스
  gulp.src("es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dist"));
  //브라우저소스
  gulp.src("public/es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("public/dist"));
});
