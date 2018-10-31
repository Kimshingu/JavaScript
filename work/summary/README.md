#Markdown
여러 문서 작성 프로그램의 저장방식의 차이로 공유가 안되는 점을 극복하기 위해서 만들어진 문서 저장 포맷 표준방식

* 현재 설명서로 많이 사용되고 있습니다.
* html 태그를 사용할 수 있습니다.

로컬저장소를 생성
---------------------
```
파일 -> cmd 입력 -> git init 입력
```

처리상태를 조회
---------------------
```
C:\Users\Administrator\Desktop\git\work\web>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html

nothing added to commit but untracked files present (use "git add" to track)
```

깃의 영역 3가지
---------------------
워킹 디렉토리 ==> 인덱스(stage) ==> 로컬저장소 <br>
소드코드 ==> 등록된 백업대상 ==> 백업정보를 갖고 있는 폴더

인덱스의 백업대상을 등록
----------------------
```
C:\Users\Administrator\Desktop\git\work\web>git add index.html
```

인덱스에 등록된 대상파일들을 로컬저장소에 커밋(백업)
-------------------------------------------------
```
C:\Users\Administrator\Desktop\git\work\web>git commit -m "first commit"
[master (root-commit) 3483b5a] first commit
 1 file changed, 10 insertions(+)
 create mode 100644 index.html
```

환경변수에 커밋 작업자정보 등록하기
------------------------------
git config --global user.name "KIM Shingu" <br>
git config --global user.email creation@naver.cim



환경정보 정보 조회하기
--------------------
```
  git config --list
```

커밋 정보 조회하기
------------------
```
C:\Users\Administrator\Desktop\git\work\web>git log
commit 3483b5adcabe6800801397d5d7385254034af130 (HEAD -> master)
Author: KIM Shungu <creation07@naver.com>
Date:   Mon Sep 3 14:16:19 2018 +0900

frist commit

C:\Users\Administrator\Desktop\git\work\web>git status
On branch master
nothing to commit, working tree clean

C:\Users\Administrator\Desktop\git\work\web>

```
nothing to commit: 인덱스 == 로컬저장소 <br>
working tree clean: 워킹디렉토리 == 로컬저장소<br>
커밋을 수행하여 백업한 상태와 현재 프로젝트 파일들의 상태가 일치한다.


삭제된 파일 조회
---------------
```
git ls-files -d
```

삭제된 파일 복구하기
------------------
```
git checkout index.html
```
