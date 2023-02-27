// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод 
// document.createElement().

// Добавит название ингредиента как его текстовое содержимое.

// Добавит элементу класс item.

// После чего вставит все <li> за одну операцию в список ul#ingredients.

const listIngredientsEl = document.querySelector('#ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createList = items =>{
  return items.map(item => {
  
  const itemMarkup = document.createElement('li');
  itemMarkup.textContent = item;
  itemMarkup.classList.add('item');
 
 return itemMarkup;
 } )
};

const list = createList(ingredients);
listIngredientsEl.append(...list);


 




