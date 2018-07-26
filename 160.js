// 내가 짠 코드
// var buttonObject = document.querySelector("button")
// var bodyBackground = document.querySelector('body')

// buttonObject.addEventListener('click' , changeBackground);

// function changeBackground() {
//     if (bodyBackground.style.background === 'purple') {
//         bodyBackground.style.background = 'white';
//     } else
//     bodyBackground.style.background = 'purple';
// }

// in lecture

var button = document.querySelector("button")
var isPurple = false;
// 그냥 이걸 isWhite 로 해서 true 값으로 하는게 좀 더 이해하기 쉬울듯?
// 여기서 알아서 하는건 if (false) {} else {} 의 실행값. > else 실행.

// button.addEventListener('click', function(){
//     if(isPurple){
//         document.body.style.background ='white';
//     } else {
//         document.body.style.background = 'purple';
//     }
//     isPurple = !isPurple;
// })


// in lecture we can use toggle.

button.addEventListener('click', function(){
        document.body.classList.toggle('purple');
})