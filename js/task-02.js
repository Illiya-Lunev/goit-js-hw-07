const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const containerListEl = document.querySelector(`#ingredients`);


const makeItem = (option) => {
    return option.map(ingredients => {

        const creatItemEl = document.createElement(`li`);
        creatItemEl.textContent = ingredients;
     
    return creatItemEl;
    });
};

const elements = makeItem(ingredients);
containerListEl.append(...elements);



