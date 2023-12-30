'use strict';

let num = Math.trunc(Math.random()*20)+1;


document.querySelector('.check').addEventListener('click',function()
{
    const guess = Number(document.querySelector('.guess').value);
    let score = Number(document.querySelector('.score').textContent);
    if(!guess)
    {
        document.querySelector('.message').textContent = '❌NO NUMBER!';
    }
    else if(guess > num && guess <= 20)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = '😒TOO HIGH!';
            --score;
            document.querySelector('.number').textContent = '?';
            document.querySelector('.score').textContent = String(score);
        }
        else{
            document.querySelector('.message').textContent = '💥 YOU LOST THE GAME!';
        }
        
    }
    else if(guess < num && guess > 0)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = '😒TOO LOW!';
            --score;
            document.querySelector('.number').textContent = '?';
            document.querySelector('.score').textContent = String(score);
        }
        else{
            document.querySelector('.message').textContent = '💥 YOU LOST THE GAME!';
        }
    }
    else if(guess === num)
    {
        let highscore = Number(document.querySelector('.highscore').textContent);
        if(score > highscore)
        {
            document.querySelector('.highscore').textContent = String(score);
        }
        document.querySelector('.number').textContent = num;
        document.querySelector('.message').textContent = '😁YOU GOT IT!';
    }
    else if(guess > 20)
    {
        document.querySelector('.message').textContent = '😑CHOOSE B/W 1 to 20!';
    }
    else if(guess < 1)
    {
        document.querySelector('.message').textContent = '😑CHOOSE B/W 1 to 20!';
    }
});



//add event listener to "AGAIN BUTTON"
document.querySelector('.again').addEventListener('click',function(){

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    num = Math.trunc(Math.random()*20)+1;
    
});