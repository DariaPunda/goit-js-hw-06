// Напиши скрипт, который реагирует на изменение значения input#font - size -
//     control(событие input) и изменяет инлайн - стиль span#text обновляя свойство
// font - size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('#font-size-control');
const spanToChangeEl = document.querySelector('#text');

inputEl.addEventListener('input', () => {
    spanToChangeEl.style.fontSize = `${inputEl.value}px`;
    // console.log(inputEl.value);
    
});