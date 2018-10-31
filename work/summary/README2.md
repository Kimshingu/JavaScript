#Github 연동하기

https://github.com/

깃헙 로그인
----------------------------

새 원격 저장소 만들기
----------------------------
New Repository >> Repository Name 작성 >> Create Repository 버튼 클릭

원격 저장소와 연결작업 수행하기
----------------------------
```
echo "# web" >> README.md
git init
git add README.md
git commit -m "really first commit"
git remote add (별칭)origin https://github.com/Kimshingu/web.git
git push -u origin master
```
