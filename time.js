const 시작시간 = new Date();

function setTime() {
  const 현재시간 = new Date();
  const 흐른시간 = new Date(현재시간 - 시작시간);
  const 분 = 흐른시간.getMinutes().toString(); //문자열로 변환 (padstart 쓰기 위함)
  const 초 = 흐른시간.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
  // `${변수명}` 이런식으로 호출가능
  // padstart는 문자열만 지원.
}

setInterval(setTime, 1000);
