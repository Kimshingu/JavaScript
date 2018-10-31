git commit --amend
[vi editor]
command mode ==> editor mode ==>  last line mode
i >> 커밋 메시지 편집 >> esc >> : >> wq! + enter

log 한 줄로 보기
 C:\Users\Administrator\Desktop\git\work\git-page>git log --pretty=oneline

C:\Users\Administrator\Desktop\git\work\git-page>git branch
  bugfix
* master

C:\Users\Administrator\Desktop\git\work\git-page>git merge bugfix
Auto-merging index.html
Merge made by the 'recursive' strategy.
 index.html | 9 +++++++++
 1 file changed, 9 insertions(+)
