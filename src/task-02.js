const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const contanierListEl = document.querySelector(`#ingredients`);


const makeItem = (option) => {
    return option.map(ingredients => {

        const creatItemEl = document.createElement(`li`);
        creatItemEl.textContent = ingredients;
     
    return creatItemEl;
    });
};

const elements = makeItem(ingredients);
contanierListEl.append(...elements);



