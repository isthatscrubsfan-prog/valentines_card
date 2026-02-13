document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');
    const buttonsDiv = document.querySelector('.buttons');
    const resultDiv = document.getElementById('result');

    // GIF-ки (прямые ссылки на Giphy)
    const dancingYorkieGif = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG91bDRpM3NndWV5cDZ5MW1zZmE0eHJhcnNiaHNndTlnM3YwZ214eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FPqJ8Ie9f1a26bS/giphy.gif'; // Пример танцующего йорка
    const poopGif = 'https://i.giphy.com/media/v1.giphy.com/media/d9d2x1zU923j11v2wL/giphy.gif'; // Пример какашки

    let noClickCount = 0; // Считаем попытки нажатия на "Нет"

    // Перемещение кнопки "Нет"
    noBtn.addEventListener('mouseover', () => {
        const containerRect = buttonsDiv.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        let newX = Math.random() * (containerRect.width - noBtnRect.width);
        let newY = Math.random() * (containerRect.height - noBtnRect.height);
        
        // Убедимся, что кнопка "Да" находится в безопасности
        const yesBtnRect = yesBtn.getBoundingClientRect();
        const collisionThreshold = 50; // Минимальное расстояние между кнопками

        // Проверяем, чтобы новая позиция "Нет" не пересекалась с "Да"
        let attempts = 0;
        while (attempts < 50 && (
            newX < yesBtnRect.right + collisionThreshold &&
            newX + noBtnRect.width > yesBtnRect.left - collisionThreshold &&
            newY < yesBtnRect.bottom + collisionThreshold &&
            newY + noBtnRect.height > yesBtnRect.top - collisionThreshold
        )) {
            newX = Math.random() * (containerRect.width - noBtnRect.width);
            newY = Math.random() * (containerRect.height - noBtnRect.height);
            attempts++;
        }

        noBtn.style.position = 'absolute'; // Убеждаемся, что она абсолютная
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });

    // Действия при нажатии "Да"
    yesBtn.addEventListener('click', () => {
        question.textContent = 'Ура, мы идем покупать тебе новую одежду! 👗✨';
        buttonsDiv.innerHTML = ''; // Удаляем кнопки
        resultDiv.innerHTML = `
            <img src="${dancingYorkieGif}" alt="Dancing Yorkie">
        `;
        resultDiv.classList.add('fade-in'); // Можно добавить анимацию появления
    });

    // Действия при нажатии "Нет"
    noBtn.addEventListener('click', () => {
        noClickCount++;
        if (noClickCount < 3) { // Убегает 3 раза, потом срабатывает "попа"
            question.textContent = 'А если подумать?'; // Меняем вопрос
            // Кнопка уже переместится на mouseover, так что просто обновляем текст
        } else {
            question.textContent = 'Ну ты и попа! 💩';
            buttonsDiv.innerHTML = ''; // Удаляем кнопки
            resultDiv.innerHTML = `
                <img src="${poopGif}" alt="Poop Emoji" class="poop-animation">
            `;
            resultDiv.classList.add('fade-in');
        }
    });
});
