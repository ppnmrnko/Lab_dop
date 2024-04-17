// Функция для валидации формы "Отправка заказа"
function validateOrderForm() {
    var nameInput = document.querySelector('.usluga input[type="text"]');
    var phoneInput = document.querySelector('.usluga input[type="tel"]');
    var serviceSelect = document.querySelector('.usluga select[name="product"]');
    var deliveryDateInput = document.querySelector('.usluga input[name="deliveryDate"]');

    // Проверка поля имени
    if (nameInput.value.trim() === '') {
        alert('Введите ваше имя');
        nameInput.focus();
        return false;
    }

    // Проверка поля телефона
    if (!/^\+7[0-9]{10}$/.test(phoneInput.value)) {
        alert('Введите корректный номер телефона (например, +79123456789)');
        phoneInput.focus();
        return false;
    }

    // Проверка выбора услуги
    if (serviceSelect.value === '') {
        alert('Выберите услугу');
        serviceSelect.focus();
        return false;
    }

    // Проверка поля даты выполнения заказа (можно добавить дополнительные проверки)
    if (deliveryDateInput.value === '') {
        alert('Выберите дату выполнения заказа');
        deliveryDateInput.focus();
        return false;
    }

    // Если все проверки пройдены, возвращаем true
    return true;
}

// Назначаем функцию validateOrderForm() обработчиком события отправки формы
document.querySelector('.usluga form').addEventListener('submit', function(event) {
    if (!validateOrderForm()) {
        event.preventDefault();
    }
});