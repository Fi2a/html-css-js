const request = new XMLHttpRequest();

const fetchDb = () => {
  request.open("GET", "database.json"); // GET POST
  request.setRequestHeader("Content-Type", "application/json");
  request.send();

  request.onload = (e) => {
    console.log(request.readyState);
    console.log(request.status);

    console.log(request.response);

    body.innerText = request.response.name;

    const response = JSON.parse(request.response);
    console.log(typeof response);
    console.log(response);

    body.innerText = response.name;
  };
};

const body = document.querySelector("body");

// 비동기 함수
const easyWay = async () => {
  const response = await fetch("http://127.0.0.1:5500/database.json");

  console.log(response);

  const data = await response.json();

  console.log(data);
  body.innerText = data.mobile;
};

easyWay();
