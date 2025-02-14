# 회원가입 양식 만들기

1. form, div, label, input, button 태그를 사용하여서 회원가입 양식 뼈대 만들기

   - 이메일이 있어야 합니다.
   - 비밀번호 있어야 합니다.
   - 새로운 비밀번호가 있어야 하고 비밀번호가 같은지 유효검사를 합니다.
   - 생년월일 // YYYYMMDD
   - 회원가입 / 취소버튼 만들기

2. styling 하기

3. 자바스크립트로 양식 다루기

   - 변수로 잡아와야 할 친구들

     1. form
     2. userid
     3. password
     4. confirmPassword
     5. 생년월일

   - form + addEventList
     1. 새로고침 방지 필수
        2-1. userid 입력했는지 검사
        2-2. *userid input창 포커스
        3.1 password 입력했는지 검사
        3-2. *password input창 포커스
        4-1. confirmPassword 가 password랑 같은지 검사
        4-2. \*confirmPassword input창 포커스
     2. 생년월일 6자리인지 대충 검사
     3. 다 입력되면 회원가입 축하해주기
     4. 취소하며 좀만 더 하라고 응원해주기
