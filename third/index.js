const form = document.querySelector("body > form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userid = document.querySelector("#id");

  if (userid.value.length === 0) {
    alert("아이디를 입력하세요.");
    return userid.focus();
  }

  const password = document.querySelector("#pwd");

  if (password.value.length === 0) {
    alert("비밀번호를 입력하세요.");
    return password.focus();
  }

  const confirmPassword = document.querySelector("#pwdC");

  if (password.value !== confirmPassword.value) {
    alert("비밀번호가 다릅니다.");
    return confirmPassword.focus();
  }

  const birth = document.querySelector("#birth");

  if (birth.value.length !== 6) {
    alert("생년월일이 6자리가 아닙니다.");
    return birth.focus();
  }

  alert("회원가입 ㅊㅋㅊㅋ");
});
