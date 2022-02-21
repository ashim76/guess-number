'use strict';
//Define a secret number 

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//////////////////////////////////////////////////////////////////////////
let score = 20;



document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // when there is no input 
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }
    //when player wins 
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '✅ Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';


    }

    // When guess is too high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High !';
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = '💥 You Lost The Game!';
            document.querySelector('.score').textContent = 0;

        }


    }

    //when guess is too low 
    else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You Lost The Game!';
            document.querySelector('.score').textContent = 0;

        }

    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    let secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';

});