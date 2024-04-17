//Скрипт для нажатия на логотип
document.addEventListener("DOMContentLoaded", function() {
    const headerImg = document.querySelector(".logo");
    let rotated = false;

    // Обработчик события завершения анимации bounceInLeft
    headerImg.addEventListener("animationend", function() {
        // Удаление класса анимации после завершения анимации
        headerImg.classList.remove("animate__bounceInLeft");
    }, { once: true });

    // Обработчик события нажатия на логотип
    headerImg.addEventListener("click", function() {
        // Вращение логотипа
        const currentRotation = rotated ? "rotateY(0deg)" : "rotateY(720deg)";
        headerImg.style.transition = "transform 2s ease";
        headerImg.style.transform = currentRotation;

        // Изменение цвета градиента фона header
        const header = document.querySelector("header");
        header.style.background = rotated ? "linear-gradient(to bottom, #6bb4fc, #57a6f4, #4399ef)" : "linear-gradient(to bottom, #ffcc00, #ff9900, #cc6600)";

        // Изменение цвета градиента фона .usluga
        const usluga = document.querySelector(".usluga");
        usluga.style.background = rotated ? "linear-gradient(to bottom, #6bb4fc, #57a6f4, #4399ef)" : "linear-gradient(to bottom, #ffcc00, #ff9900, #cc6600)";

        // Изменение цвета градиента фона footer
        const footer = document.querySelector("footer");
        footer.style.background = rotated ? "linear-gradient(0deg, #72B1E4ff, #5FA5DEff, #4997D7ff, #358AD1ff, #237ECBff, #2886D5ff, #2679C5ff, #236FB7ff, #2164AAff, #145196ff)" : "linear-gradient(0deg, #ffcc00, #ff9900, #cc6600)";
  
        rotated = !rotated;
    });
});

//Скрипт для нажатия на телефон
document.addEventListener("DOMContentLoaded", function() {
    const headerImg = document.querySelector(".header__image");
    let rotated = false;

    // Обработчик события завершения анимации bounceInRight
    headerImg.addEventListener("animationend", function() {
        // Удаление класса анимации после завершения анимации
        headerImg.classList.remove("animate__bounceInRight");
    }, { once: true });

    // Обработчик события нажатия на телефон
    headerImg.addEventListener("click", function() {
        // Вращение телефон
        const currentRotation = rotated ? "rotateX(0deg)" : "rotateX(360deg)";
        headerImg.style.transition = "transform 1s ease";
        headerImg.style.transform = currentRotation;

        // Изменение цвета текста на странице
        const body = document.querySelector("body");
        body.style.color = rotated ? "black" : "red";

        // Изменение цвета текста в offer
        const titleSpan = document.querySelector(".offer");
        titleSpan.style.color = rotated ? "white" : "red";
        
        rotated = !rotated;
    });
});
