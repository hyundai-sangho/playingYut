$(document).ready(function () {
  // 버튼을 클릭했을 때
  $('button').click(function () {
    // 0. nak 클래스를 처음부터 제거
    $('.yuch_play > div.yuch04').removeClass('nak');

    // 0. 클릭하자마자 버튼 사용 불가능하게 처리
    $('button').prop('disabled', true);

    // 1. rotate 클래스 추가 - 마지막에 삭제
    $('.yuch_play > div').addClass('rotate');

    // 2. rotate 애니메이션 사용 후에 랜덤 명령 실행
    setTimeout(function () {
      // 3. 낙 처리 - 10번 중에 한 번만 실행
      let nak = Math.floor(Math.random() * 9) + 1;

      console.log('낙 : ' + nak);

      // 1 ~ 10 중의 어떤 숫자를 써도 됨.
      if (nak == 7) {
        $('.yuch_play > div.yuch04').addClass('nak');
      }

      // 4. 각각의 윷이 랜덤하게 처리
      let random = [];

      // 4개를 한 번에 처리하기 위한 반복문
      for (let i = 0; i < 4; i++) {
        // 각각 변수에 1과 2를 랜덤하게 담기
        // eval(`random${i}` + '= Math.floor(Math.random() * 2) + 1;');
        random[i] = Math.floor(Math.random() * 2) + 1;

        // 현재 반복하고 있는 변수 담기
        // let ran = eval(`random${i}`);
        let ran = random[i];

        console.log(random);

        if (ran == 1) {
          $(`.yuch_play > div.yuch0${i}`).removeClass('active');
        } else {
          $(`.yuch_play > div.yuch0${i}`).addClass('active');
        }
      }

      // 5. rotate 제거해서 다시 클릭시 애니메이션 적용
      $('.yuch_play > div').removeClass('rotate');

      // 6. 버튼을 다시 사용하게 처리
      $('button').prop('disabled', false);
    }, 600);
  });
});
