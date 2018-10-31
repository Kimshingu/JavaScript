C:\Users\Administrator\Desktop\git\work\test-branch>cd ..

C:\Users\Administrator\Desktop\git\work>mkdir test-merge && cd test-merge
C:\Users\Administrator\Desktop\git\work\test-merge>echo "">> test.js

console.log("111");
C:\Users\Administrator\Desktop\git\work\test-merge>git add .
C:\Users\Administrator\Desktop\git\work\test-merge>git commit -m "commit #1"

console.log("222");
C:\Users\Administrator\Desktop\git\work\test-merge>git add .
C:\Users\Administrator\Desktop\git\work\test-merge>git commit -m "commit #2"


C:\Users\Administrator\Desktop\git\work\test-merge>git branch bugfix
C:\Users\Administrator\Desktop\git\work\test-merge>git checkout bugfix

console.log("333");
C:\Users\Administrator\Desktop\git\work\test-merge>git add .
C:\Users\Administrator\Desktop\git\work\test-merge>git commit -m "X"

console.log("444");
C:\Users\Administrator\Desktop\git\work\test-merge>git add .
C:\Users\Administrator\Desktop\git\work\test-merge>git commit -m "Y"

bugfix 개발이 완료되면 더 이상 해당 브랜치가 필요없다면
bugfix 브랜치의 코드를 master 브랜치와 통합하고자 한다.
C:\Users\Administrator\Desktop\git\work\test-merge>git checkout master
C:\Users\Administrator\Desktop\git\work\test-merge>git merge bugfix
Updating 7aa8ac4..009dae9
Fast-forward
test.js | 2 ++
1 file changed, 2 insertions(+)

git 커밋기록 보기
C:\Users\Administrator\Desktop\git\work\test-merge>gitk
