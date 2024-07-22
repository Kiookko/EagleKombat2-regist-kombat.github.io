// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const agreeCheckbox = document.getElementById('agree-checkbox');
    const agreeButton = document.getElementById('agree-button');
    const disagreeButton = document.getElementById('disagree-button');
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const message = document.getElementById('message');

    agreeCheckbox.addEventListener('change', () => {
        agreeButton.style.display = agreeCheckbox.checked ? 'block' : 'none';
    });

    agreeButton.addEventListener('click', () => {
        loginForm.style.display = 'flex';
        message.textContent = '';
    });

    disagreeButton.addEventListener('click', () => {
        localStorage.setItem('userAgreed', 'false');
        loginForm.style.display = 'none';
        message.textContent = 'Вы не вошли в аккаунт, к сожалению вы не сможете воспользоваться игрой.';
    });

    loginButton.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            localStorage.setItem('userAgreed', 'true');
            message.textContent = 'Ваш Google аккаунт не хранится, это просто проверка что вы человек.';
            // Перенаправляем пользователя на другой сайт
            window.location.href = 'https://kiookko.github.io/EagleKombat2.github.io/';
        } else {
            message.textContent = 'Пожалуйста, введите ваш Gmail и пароль.';
        }
    });

    // Проверяем статус соглашения при загрузке страницы
    const userAgreed = localStorage.getItem('userAgreed');
    if (userAgreed === 'true') {
        message.textContent = 'Ваш Google аккаунт не хранится, это просто проверка что вы человек.';
    } else if (userAgreed === 'false') {
        message.textContent = 'Вы не вошли в аккаунт, к сожалению вы не сможете воспользоваться игрой.';
    }
});
