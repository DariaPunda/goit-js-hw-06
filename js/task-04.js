// Создай переменную counterValue в которой будет храниться текущее 
// значение счетчика и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай 
// или уменьшай значение счтетчика.

// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const spanEl = document.querySelector('#value');
const addButtonEl = document.querySelector('[data-action="increment"]');
const removeButtonEl = document.querySelector('[data-action="decrement"]');

addButtonEl.addEventListener("click", () => {
    spanEl.textContent = counterValue +1;
    // console.log(counterValue);
    return counterValue += 1;
});

removeButtonEl.addEventListener("click", () => {
    spanEl.textContent = counterValue - 1;
    // console.log(counterValue);
    return counterValue -= 1;
})