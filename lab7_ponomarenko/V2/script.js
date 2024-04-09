let randomNumber = Math.floor(Math.random() * 10) + 1;
const attempts = 5;
let remainingAttempts = attempts;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.trim();

    if (guess === '' || isNaN(guess) || guess < 1 || guess > 10) {
        document.getElementById('errorNotification').style.display = 'block';
        endGame(false);
        return;
    }

    remainingAttempts--;

    document.getElementById('attempts').textContent = `У вас осталось ${remainingAttempts} попыток.`;

    const guessNumber = parseInt(guess);

    if (guessNumber === randomNumber) {
        endGame(true);
    } else if (remainingAttempts === 0) {
        endGame(false);
    } else {
        const message = guessNumber < randomNumber ? 'Загаданное число больше.' : 'Загаданное число меньше.';
        setMessage(message);
        document.getElementById('hint').textContent = message;
        guessInput.value = '';
    }
}

function setMessage(message) {
    document.getElementById('message').textContent = message;
}

function setError(message) {
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function endGame(isWinner) {
    const errorNotification = document.getElementById('errorNotification');
    const congratulationsNotification = document.getElementById('congratulations');
    const gameoverNotification = document.getElementById('gameover');

    const message = isWinner ? 'Вы угадали число!' : `Вы использовали все попытки. Загаданное число было: ${randomNumber}.`;

    if (isWinner) {
        congratulationsNotification.style.display = 'block';
        playWinSound();
    } else {
        if (errorNotification.style.display === 'none') {
            gameoverNotification.style.display = 'block';
            document.getElementById('secretNumber').textContent = randomNumber;
        }
    }

    setMessage(message);
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
    document.getElementById('hint').textContent = '';
}

function playWinSound() {
    const winSound = document.getElementById('winSound');
    winSound.play();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    remainingAttempts = attempts;
    setMessage('');
    document.getElementById('attempts').textContent = `У вас есть ${remainingAttempts} попыток.`;
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('congratulations').style.display = 'none';
    document.getElementById('gameover').style.display = 'none';
    document.getElementById('errorNotification').style.display = 'none';
}