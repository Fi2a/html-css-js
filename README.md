#

## JSON 자료 만드는 법

1. 무조건 {} 로 시작
2. 자료값은 무조건 "" 안에 담음 '' 안됨
3. = 안쓰고 : 로 값을 할당함.

   - 자바스크립트에서 자료값 주는 문법과 동일
   - 문자열 ""
   - 숫자 0123
   - 객체 {}
   - 배열 []
   - null은 동일하게 null
   - undefined 값은 줄 수 없음
   - boolean 타입도 그래도 쓸 수 있음 true/false

4. json 파일은 문자열로 저장됨
5. 가져올 떄 문자열로 가져오고 문자열을 객체로 변환해야 함, 그래야 쓸 수 있음

   - const request = new XMLHttpRequest()
   - request.open("GET / POST", "json파일 경로")
   - requset.setRequestHeader("Content-Type", "자료형태") // 'application/json
   - request.send()
   - requset.onload = () => {화살표 함수 안에서 작업}

6. 자료 가공하기

   - requset.response 의 타입은 문자열임
   - 위의 문자열을 JSON.parse 함수로 꺼내와야 함
   - const response = JSON.parse(request.response)
   - 객체로 나타남

7. fetch 라는 함수
   1. async await 라는 키워드를 사용해서 비동기 함수를 작성
   2. 단순히 fetch 함수에 주소값을 전달하고 response 를 받아오면 됨
      - const response = await fetch("주소")
   3. json함수를 사용해서 response 를 가공하면 됨
      - const data = await response.json()
