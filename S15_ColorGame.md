## ColorGameProject.

```167```
Creating the Color Game.

```169```

화면에 33%만 차지하게 만들기.
margin과 width 계산으로 반응형으로 스퀘어 만들기.

30% X 3 + 10 / 6 = 1.66 * 6.
즉 width 30% 3개와 margin 1.66% 주기.
왜 10을 6으로 나누는가? margin은 양옆아래로 2개씩 생기기 때문에.

이걸 만든 후에 컨테이너의 크기를 줄여버리기.


짜임새 있게 짜는 것의 중요성..
Color Game 만들기.

```176```
여기서 중요한 것은
module design pattern 이다.

어떻게 하는거냐.
즉
var game = {}
game.init = function() {
    setupModeButton();
    setupSquare();
    reset()
}

game.init();
이런식으로..
즉 파이썬으로 잘떄 if __name__ = __main__
처럼 main함수를 짜는 것.

디자인 패턴과 객체지향프로그래밍은
뗄래야 뗄 수 없는 관계이다.
