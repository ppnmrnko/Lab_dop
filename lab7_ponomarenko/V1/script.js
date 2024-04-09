function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }
if (confirm ("Попробуйте угадать число от 1 до 10! У вас есть 5 попыток.")){
    let num = getRandomArbitrary(1, 11);
    //console.log(num); //вывод в консоль ответ
    let res = prompt('Угадайте загаданное число!');
    let k=0;
    while (true){
        if (k < 4){
            if (res == num){
                k++;
                alert('Поздравляем! Вы угадали число! Число ваших попыток составило '+k+'!');
                break;
            } else if (num > res){
                k++;
                res = prompt('Загаданное число больше '+res+'!');
            } else if (num < res){
                k++;
                res = prompt('Загаданное число меньше '+res+'!');
            } else {
                alert('Ошибка ввода! Пожалуйста, вводите корректные числа от 1 до 10.');
                break;
            }
        }
        else{
            alert('Вы использовали все попытки! Загаданное число было: '+num+'. Сыграйте ещё раз.');
            break;
        }
    }
}