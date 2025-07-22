let computerAnswer;
let humanAnswer;
let computerChoise;
let counter = 0;
let humanScore = 0;
let computerScore = 0;
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const h2 = document.createElement('h2')
const body = document.querySelector('body');

buttonRock.textContent = 'Rock';
buttonPaper.textContent = 'Paper';
buttonScissors.textContent = 'Scissors';
buttonRock.classList.add ( 'game-button');
buttonPaper.classList.add ( 'game-button');
buttonScissors.classList.add ( 'game-button');
buttonRock.setAttribute('id', 'rock');
buttonPaper.setAttribute('id', 'paper');
buttonScissors.setAttribute('id', 'scissors');
h2.style.cssText = 'flex-basis: 100% flex-shrink: 0; padding: 15px; opacity: 0'

body.style.cssText = 'display: flex; justify-content:space-around; align-items:center; gap: 30px; flex-wrap: wrap; height: 100vh;';

document.addEventListener('DOMContentLoaded', () => {
    const gameButton = document.querySelectorAll('.game-button');
    gameButton.forEach(el => {
        el.style.cssText = 'flex-grow: 1; aspect-ratio: 1/1; border-radius: 0px; flex-basis: 30%; font-size:32px; font-weight:900;';
        el.addEventListener('click',function () {
            h2.style.opacity = '1';
            h2.style.backgroundColor = "honeydew";
                humanAnswer = this.id;
                computerChoise =getComputerChoise();
                computerChoise == 0 ? computerAnswer = 'rock' 
                : computerChoise == 1 ? computerAnswer = 'paper' 
                : computerChoise == 2 ? computerAnswer = 'scissors'
                : computerAnswer = 'Undefined';
                newRound();
                counter++;
                if(counter === 5) {
                    h2.textContent = `Your score is ${humanScore}. Computer score is ${computerScore}. Game over!`
                    h2.style.backgroundColor = "papayawhip";
                    counter = 0;
                    computerScore = 0;
                    humanScore = 0;
                };
                
                console.log(humanAnswer);
                console.log(computerAnswer);
        });
    });
});


body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissors);
body.appendChild(h2);




function getComputerChoise () {
    return Math.floor(Math.random() * 3);
};

function newRound () {
    if (humanAnswer === computerAnswer) {
        h2.textContent =`Your choise is a ${humanAnswer}.Computer choise is a ${computerAnswer}.It's a draw!`;
    }else if (humanAnswer === 'rock' && computerAnswer === 'scissors' 
              || humanAnswer === 'paper' && computerAnswer === 'rock' 
              || humanAnswer === 'scissors' && computerAnswer === 'paper') {
        h2.textContent =`Your choise is a ${humanAnswer}.Computer choise is a ${computerAnswer}.You win!`;
        humanScore++;
    }else if (computerAnswer === 'rock' && humanAnswer === 'scissors' 
              || computerAnswer === 'paper' && humanAnswer === 'rock' 
              || computerAnswer === 'scissors' && humanAnswer === 'paper') {
        h2.textContent =`Your choise is a ${humanAnswer}.Computer choise is a ${computerAnswer}.You lose!`;
        computerScore++;
    } else {
        alert('Unexpected programm error')
    };
};
