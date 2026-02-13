document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');
    const buttonsDiv = document.querySelector('.buttons');
    const resultDiv = document.getElementById('result');

    // Ссылки на файлы, которые вы загрузили в GitHub
    const dancingYorkieGif = 'happy.gif'; 
    const poopGif = 'poop.gif';

    // Функция для перемещения кнопки "Нет"
    const moveNoButton = () => {
        // Вычисляем случайные координаты внутри окна браузера
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    };

    // Кнопка убегает при наведении курсора
    noBtn.addEventListener('mouseover', moveNoButton);
    
    // Кнопка убегает при касании (для мобильных телефонов)
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Предотвращаем стандартное нажатие
        moveNoButton();
    });

    // Счетчик для тех, кто всё-таки смог нажать "Нет" (например, через Tab)
    let clickCount = 0;
    noBtn.addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 1) { // Если муж оказался супер-быстрым и нажал
            question.textContent = 'Ну ты и попа! 💩';
            buttonsDiv.style.display = 'none';
            resultDiv.innerHTML = `<img src="${poopGif}" style="width: 100%; max-width: 300px; border-radius: 15px;">`;
        }
    });

    // Логика для кнопки "Да"
    yesBtn.addEventListener('click', () => {
        question.textContent = 'Ура, мы идем покупать тебе новую одежду! 👗✨';
        buttonsDiv.style.display = 'none';
        resultDiv.innerHTML = `<img src="${dancingYorkieGif}" style="width: 100%; max-width: 300px; border-radius: 15px;">`;
    });
});
