function startGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 5;
    let guessed = false;

    while (attempts > 0 && !guessed) {
        let userInput = prompt(`Угадайте число от 1 до 10. У вас осталось ${attempts} попыток.`);

        if (userInput === null || userInput === "") {
            return;
        }

        let guess = parseInt(userInput);

        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Неверный ввод. Пожалуйста, введите число от 1 до 10.");
            continue;
        }

        if (guess === randomNumber) {
            guessed = true;
            alert("Поздравляем! Вы угадали число!");
        } else if (guess < randomNumber) {
            alert("Загаданное число больше.");
        } else {
            alert("Загаданное число меньше.");
        }

        attempts--;
    }

    if (!guessed) {
        let playAgain = confirm("Вы исчерпали все попытки. Хотите сыграть еще раз?");
        if (playAgain) {
            startGame();
        } else {
            alert("Спасибо за игру!");
        }
    }
}