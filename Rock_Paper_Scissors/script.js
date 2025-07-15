function getComputerChoise () {
    return Math.floor(Math.random() * 3);
};


let computerAnswer;
let humanAnswer;
let counter = 0;
let humanScore = 0;
let computerScore = 0;


function newRound () {
    if (humanAnswer === 'Rock' 
        || humanAnswer === 'Paper' 
        || humanAnswer === 'Scissors') {
        if (humanAnswer === computerAnswer) {
            alert(`
                 Your choise is a ${humanAnswer}
                 Computer choise is a ${computerAnswer}
                 It's a draw!`);
        }else if (humanAnswer === 'Rock' && computerAnswer === 'Scissors' 
                  || humanAnswer === 'Paper' && computerAnswer === 'Rock' 
                  || humanAnswer === 'Scissors' && computerAnswer === 'Paper') {
                    alert(`
                         Your choise is a ${humanAnswer}
                         Computer choise is a ${computerAnswer}
                         You win!`);
                    humanScore++;
        }else if (computerAnswer === 'Rock' && humanAnswer === 'Scissors' 
                  || computerAnswer === 'Paper' && humanAnswer === 'Rock' 
                  || computerAnswer === 'Scissors' && humanAnswer === 'Paper') {
                    alert(`
                         Your choise is a ${humanAnswer}
                         Computer choise is a ${computerAnswer}
                         You lose!`);
                    computerScore++;
        } else {
            alert('Unexpected programm error')
        };
    }else{
        alert('Your choise is wrong.Please try again')
    };
};

while (counter <= 5) {
    humanAnswer = prompt(`
        What your choise?
        Print: 'Rock', 'Paper' or 'Scissors'`, 'No answer');
    let computerChoise = getComputerChoise();
    computerChoise == 0 ? computerAnswer = 'Rock' 
    : computerChoise == 1 ? computerAnswer = 'Paper' 
    : computerChoise == 2 ? computerAnswer = 'Scissors'
    : computerAnswer = 'Undefined';
    
    if (humanAnswer === 'No answer' || humanAnswer === null) {
        break;
    };
    newRound();
    counter++;
};

if (counter > 0 && humanScore < computerScore) {
    alert (`
        Rounds played:${counter}
        Your wins:${humanScore}
        Computer wins:${computerScore}
        You lose!`)
}else if (counter > 0 && humanScore > computerScore) {
    alert (`
        Rounds played:${counter}
        Your wins:${humanScore}
        Computer wins:${computerScore}
        You win!`)
}else if (counter > 0 && humanScore === computerScore) {
    alert (`
        Rounds played:${counter}
        Your wins:${humanScore}
        Computer wins:${computerScore}
        It's a draw!`)
}else {
    alert('Error.Can\'t count total score')
};
