# 2025-DEVSONG-client

## 🌕 개발 컨벤션 🌕

### 🟡 Commit Convention
```
feat : 새로운 기능 구현
modify : 코드 수정 (기능의 변화가 있을 때)
docs : README나 WIKI 등의 문서 수정
add : feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성
remove : 폴더 또는 파일 삭제, 쓸모없는 코드 삭제
fix : 버그, 오류 해결
rename : 파일 이름 변경 또는 파일 이동시
refactor : 기능 추가나 버그 수정이 없는 코드 변경 ( 코드 구조 변경 등의 리팩토링 )
perf : 성능 개선 ( API 호출 횟수, 페이지 로드 시간 등 )
correct : 문법 오류나 타입의 변경, 이름 변경시 ( 세미콜론 추가 등 비즈니스 로직에 변경 없음 )
style : CSS 스타일 수정
test : 테스트 추가 또는 이전 테스트 수정
chore : src 또는 test 파일을 수정하지 않는 기타 변경 사항 ( 빌드/패키지 매니저 설정 변경 등 )
```

**commit 예시:**
```js
git commit -m "#이슈 번호 커밋 태그: 커밋 내용"
ex) git commit -m "#1 feat: 회원가입 기능 완료"
```
<br >

### 🟡 Branch Convention
```
main : 출시 가능한 프로덕션 코드를 모아두는 브랜치
dev : feat에서 기능 개발이 끝난 후 다음 버전 개발을 위한 코드를 모아두는 브랜치
feature : 하나의 기능을 개발하기 위한 브랜치, 기능개발 완료되면 develop 브랜치로 머지
fix : 에러 수정, 버그 수정
docs : README, 문서
refactor : 코드 리펙토링 (기능 변경 없이 코드만 수정할 때)
modify : 코드 수정 (기능의 변화가 있을 때)
chore : gradle 세팅, 위의 것 이외에 거의 모든 것
```

**branch naming 예시:**
```js
feat/#이슈 번호-기능 이름
ex) feat/#1-login
```
<br >

### 🟡 Issue Convention
```
feat : 기능 추가
fix : 에러 수정, 버그 수정
docs : README, 문서
refactor : 코드 리펙토링 (기능 변경 없이 코드만 수정할 때)
modify : 코드 수정 (기능의 변화가 있을 때)
perf : 성능 개선 ( API 호출 횟수, 페이지 로드 시간 등 )
chore : 그 외 작업 내용
```

**issue naming 예시:**
```js
이슈 태그: 작업 내용
ex) feat: user api 구현
```
