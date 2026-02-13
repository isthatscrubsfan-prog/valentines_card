document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');
    const buttonsDiv = document.querySelector('.buttons');
    const resultDiv = document.getElementById('result');

    // Прямые ссылки на гифки (используем максимально надежные домены Giphy)
    const dancingYorkieGif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG91bDRpM3NndWV5cDZ5MW1zZmE0eHJhcnNiaHNndTlnM3YwZ214eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FPqJ8Ie9f1a26bS/giphy.gif'; 
    const poopGif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I1OHR3Z3M0ZHg0Y3R3eXN4eXN4eXN4eXN4eXN4eXN4eXN4eXN4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/d9d2x1zU923j11v2wL/giphy.gif';

    // Функция для перемещения кнопки "Нет"
    const moveNoButton = () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed'; // Используем fixed, чтобы летала по всему экрану
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    };

    // Кнопка убегает при наведении
    noBtn.addEventListener('mouseover', moveNoButton);
    
    // Кнопка убегает при попытке нажатия (для телефонов)
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    // Если всё-таки нажали "Нет" (через 5 попыток кнопка перестанет убегать)
    let clickCount = 0;
    noBtn.addEventListener('click', () => {
        clickCount++;
        if (clickCount > 5) {
            question.textContent = 'Ну ты и попа! 💩';
            buttonsDiv.style.display = 'none';
            resultDiv.innerHTML = `<img src="${poopGif}" style="width: 100%; max-width: 300px;">`;
        }
    });

    // Если нажали "Да"
    yesBtn.addEventListener('click', () => {
        question.textContent = 'Ура, мы идем покупать тебе новую одежду! 👗✨';
        buttonsDiv.style.display = 'none';
        resultDiv.innerHTML = `<img src="${dancingYorkieGif}" style="width: 100%; max-width: 300px;">`;
    });
});
