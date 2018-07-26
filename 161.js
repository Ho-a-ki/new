
var player1Score = document.querySelector(".player1");
var player2Score = document.querySelector(".player2");

var player1Win = document.querySelector('#player1');
var player2Win = document.querySelector('#player2');
var reset = document.querySelector('#reset');

var scoreText = document.querySelector('#scoreController').value
var scoreController = document.querySelector('#scoreController')
var finish = document.querySelector('#finish').textContent;


scoreController.addEventListener('change',function(){
    document.querySelector('#finish').textContent = document.querySelector('#scoreController').value
    finish = document.querySelector('#finish').textContent;

    player1Win.addEventListener('click',Score1)
    player2Win.addEventListener('click',Score2)
    resetScore()
})


function Score1() {
    player1Score.textContent = Number(player1Score.textContent) + 1;
    if (player1Score.textContent == finish){
        console.log('finish')
        player1Score.style.color = 'green'
        player1Win.removeEventListener('click',Score1, false);
        player2Win.removeEventListener('click',Score2, false);
    }
}

function Score2() {
    player2Score.textContent = Number(player2Score.textContent) + 1;
    if (player2Score.textContent == finish){
        console.log('finish')
        player2Score.style.color = 'green'
        player1Win.removeEventListener('click',Score1, false);
        player2Win.removeEventListener('click',Score2, false);
    }
}

function resetScore() {
    player1Score.textContent = 0;
    player1Score.style.color = 'black';
    player1Win.addEventListener('click',Score1)
    player2Score.textContent = 0;
    player2Score.style.color = 'black';
    player2Win.addEventListener('click',Score2)
}

player1Win.addEventListener('click',Score1)

player2Win.addEventListener('click',Score2)

reset.addEventListener('click',resetScore)



