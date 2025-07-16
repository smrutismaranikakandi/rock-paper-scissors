const startGameBtn = document.getElementById('start-game');
const welcomeScreen = document.querySelector('.welcome-screen');
const gameContainer = document.querySelector('.container');

const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const userChoiceP = document.getElementById('user-choice');
const computerChoiceP = document.getElementById('computer-choice');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;

startGameBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    gameContainer.style.display = 'block';
});

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('data-choice');
        playRound(userChoice);
    });
});

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    userChoiceP.textContent = `You chose: ${capitalize(userChoice)}`;
    computerChoiceP.textContent = `Computer chose: ${capitalize(computerChoice)}`;

    if (winner === 'user') {
        userScore++;
        resultText.textContent = '🎉 You Win!';
        resultText.style.color = '#28a745';
    } else if (winner === 'computer') {
        computerScore++;
        resultText.textContent = '😞 You Lose!';
        resultText.style.color = '#dc3545';
    } else {
        resultText.textContent = '😐 It\'s a Draw!';
        resultText.style.color = '#333';
    }

    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(user, computer) {
    if (user === computer) return 'draw';
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'user';
    }
    return 'computer';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
