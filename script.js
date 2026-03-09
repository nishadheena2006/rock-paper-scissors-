let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    // Reset previous messages
    document.getElementById('result').innerText = '';
    document.getElementById('timer').innerText = '';

    let countdown = 3;
    document.getElementById('timer').innerText = `Get ready: ${countdown}`;

    const timer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            document.getElementById('timer').innerText = `Get ready: ${countdown}`;
        } else {
            clearInterval(timer);
            document.getElementById('timer').innerText = 'Go!';
            showResult(playerChoice);
        }
    }, 1000);
}

function showResult(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = `Draw! Both chose ${playerChoice}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You Win! 🎉 ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    } else {
        result = `Computer Wins! 💻 ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }

    document.getElementById('result').innerText = result;
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
}

// Reset button
document.getElementById('reset').addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('result').innerText = '';
    document.getElementById('timer').innerText = '';
});
