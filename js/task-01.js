// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в 
// ul#categories, то есть элементов li.item.

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
// текст заголовка элемента (тега <h2>) и количество элементов в категории 
// (всех вложенных в него <li>).

// Для выполнения этой задачи нужно использовать метод forEach() и свойства 
// навигации по DOM.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// 1.
const categoryEl = document.querySelector('#categories');
const categoriesChildren = categoryEl.children;

const numberOfCategories = `Number of categories: ${categoriesChildren.length}`;
console.log(numberOfCategories);

// 2.
const categoriesChildrenEl = document.querySelectorAll('li.item');

const categoryInfo = categoriesChildrenEl.forEach( el => {
 const category = el.firstElementChild.textContent;
 const elements = el.lastElementChild.children.length;
 
 console.log (`Category: ${category}
 Elements: ${elements}`);
})
