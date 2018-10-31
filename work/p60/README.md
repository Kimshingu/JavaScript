npm install http-server -g
--------------------
```
-g: 설치대상프로그램을 전역적으로 설치 나중에 콘솔에 해댕 프로그램을 사용할 수 있게 된다.
npm install 설치대상프로그램 -옵션
install = i 단축가능
ctrl +c 작동 멈춤
esc - cmd 코드 삭제
```

C:\Users\Administrator\Desktop\git\work>npm i -g http-server
C:\Users\Administrator\AppData\Roaming\npm\http-server ->
C:\Users\Administrator\AppData\Roaming\npm\node_modules\http-server\bin\http-server
C:\Users\Administrator\AppData\Roaming\npm\hs -> C:\Users\Administrator\AppData\
Roaming\npm\node_modules\http-server\bin\http-server
+ http-server@0.11.1
added 25 packages in 1.952s

npm init


package.json
---------------
파일은 프로젝트 설명,저자,라이센스,원격저장소,단축명령,디펜던시 정보를 관리하는 파일입니다.
<br>노드 기반의 프로젝트에서 주로 사용합니다.
```
"name": "p60",
"version": "1.0.0",
"description": "npm install http-server -g\r -g: 설치대상프로그램을 전역적으로
설치 나중에 콘솔에 해댕 프로그램을 사용할 수 있게 된다.\r npm install 설치대상
프로그램 -옵션\r install = i 단축가능",
"main": "index.js",
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
"author": "ShinguKim",
"license": "MIT"
```


npm i underscore
--------------------
-g 옵션을 안 붙였으므로 컴퓨터 당 하나의 설치 대상 프로그램을 설치하는 것이 아니라
<br>커서가 위치한 폴더 밑으로 해당 프로그램을 설치한다.
<br>결국 프로젝트 당 하나를 설치하는 것이며 자동으로 node_modules 폴더밑으로 설치가 된다.

```
C:\Users\Administrator\Desktop\git\work\p60>
C:\Users\Administrator\Desktop\git\work\p60>npm i underscore
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN p60@1.0.0 No repository field.

+ underscore@1.9.1
added 1 package in 0.549s
```

package.json  파일에 다음 내용이 추가된다.
```
"dependencies": {
  "underscore": "^1.9.1"
}
```
