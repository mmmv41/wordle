let index = 0; // let 으로 지정 -> 수정 가능하다
let attempts = 0; //몇번 시도했는가

function appStart() {
  const handleEnterKey = () => {
    //정답확인
  };
}

  const handleKeydown = (event) => {
    const key = event.key.toUpperCase();
    //key에 event.key 값 지정
    //toUpperCase() : 대문자로 변환
    const keyCode = event.keyCode; //keyCode에 event.keyCode 값 지정
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );
    if (event.key === "Enter") {
      handleEnterKey();
    } else if (index === 5) return;
    else if (keyCode >= 65 && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }


    /*if (keyCode >= 65 && keyCode <= 90) {
      //keyCode가 65~90사이인 값만 들어가게 (a~z 알파벳만 들어가게)
      thisBlock.innerText = key;
      //입력하는 key값을 첫번째 블럭에 넣는다 (innerText)
      index += 1; // index = index + 1, index++, index += 1다 같은 표현
    }

    //console.log(event.key, event.keyCode); //event 무슨 키를 눌렀는지 , 몇번째 키코드인지
  };*/
  window.addEventListener("keydown", handleKeydown);
}

appStart();
