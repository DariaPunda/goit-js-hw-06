// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlDivEl = document.querySelector('#controls');
const divToIncrease = document.querySelector('#boxes');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  const numberOfDivs = amount * document.createElement('div');

  console.log(numberOfDivs);
}