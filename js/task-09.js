// Напиши скрипт, который изменяет цвета фона элемента < body >
// через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.



const bodyEl = document.querySelector('body');

const inputValueOfColorEl = document.querySelector('.color');

const buttonEl = document.querySelector('.change-color');


buttonEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
const value = (inputValueOfColorEl.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
  .padStart(6, 0)}`);
  bodyEl.style.backgroundColor = `${value}`;
};