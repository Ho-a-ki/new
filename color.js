var colors = generateRdColors(6)
var num = 6

var squares = document.querySelectorAll('.square')
generateRdColors(num);
var answerDisplay = document.querySelector('#answerColor')
var answerColor = pickOneColor()
changeColor()
answerDisplay.textContent = answerColor
var mes = document.querySelector('#mes')
var easyBtn = document.querySelector('#easyBtn')
var hardBtn = document.querySelector('#hardBtn')

easyBtn.addEventListener('click',function() {
    easyBtn.classList.add('selected')
    hardBtn.classList.remove('selected')
})

hardBtn.addEventListener('click',function() {
    easyBtn.classList.remove('selected')
    hardBtn.classList.add('selected')
})



for(i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
    clickedColor = this.style.background;
    if (clickedColor == answerColor) {
        changeAllColor(answerColor)
    } else {
        this.style.background = '#232323';
        mes.textContent = 'try again'
    }
})
}


function rdcolor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return 'rgb(' + r + ", " + g + ", " + b + ')'
}

function generateRdColors(num) {
    var arr = [];
    for (var i = 0 ; i < num ; i++) {
        arr.push(rdcolor())
    }
    return arr;
}

function pickOneColor() {
    rdNum = Math.floor(Math.random() * 6) + 1
    return colors[rdNum]
}

function changeColor() {
    for (var i = 0 ; i < num; i++) {
    squares[i].style.background = colors[i];
}
}

function changeAllColor(color) {
    for (var i = 0 ; i < num; i++) {
        squares[i].style.background = color;
    }
    }
    