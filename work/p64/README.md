.git                깃의 로컬 저장소 <br>
dist/               서버 JS의 배포파일 폴더<br>
es6                 서버 JS의 소스코드 폴더<br>
public/dist         브라우저 JS의 배포파일 폴더<br>
public/es6          브라우저 JS의 소스코드 폴더<br>
.gitignore          깃 관리 제외 대상 설정파일<br>
package.json        프로젝트 정보, 디펜던시 설정파일<br>
README.md           프로젝트 설명파일<br>

서버 JS: Node 사용하는 컴파일러가 컴파일해서 실행한다.<br>
브라우저 JS: 브라우저 내장 JS 컴파일러가 컴파일해서 실행한다.<br>

es6 폴더에 있는 ES6 코드 ==> 트랜스파일링 ==> ES5 코드로 바꾼 다음 dist 폴더에 생성한다.

ES6코드인 public/es6  == 트랜스파일링 ==> ES5 코드로 public/dist 폴더에 생성한다

C:\Users\Administrator\Desktop\git\work\p64>npm i --save-dev babel-preset-es2015
```
npm WARN deprecated babel-preset-es2015@6.24.1: �  Thanks for using Babel: we re
commend using babel-preset-env now: please read babeljs.io/env to update!
npm WARN p64@1.0.0 No repository field.

+ babel-preset-es2015@6.24.1
added 62 packages in 20.439s
```

#pakeage.json<br>
npm install babel-preset-es2015--save-dev<br>
npm install gulp [--save]


```
"dependencies": {
  "gulp": "^3.9.1"
}

"devDependencies": {
  "@babel/core": "^7.0.0",
  "babel-preset-es2015": "^6.24.1"
}
```
dependencies: 사용자에게 서비스할 때 필요한 기능<br>
devdependencies: 개발자가 개발할 떄 필요한 기능

책에는 언급 없지만 다음 설치가 필요하다.<br>
npm i --save-dev @babel/core

JavaScript 컴파일러가 하나가 아니다.<br>
기술은 버전에 따라 설정이 바뀐다.


pakeage.json 디펜던시 버전을 수동으로 바꾼다음 다음 명령을 수행하면
다시 재 설치되거나 사용하지 않는 것이 삭제됩니다.

npm install

책에서 사용한 디펜던시 버전과 달라서 제대로 작동하지 않았다.<br>
버전관리가 매우매우 중요하다.
