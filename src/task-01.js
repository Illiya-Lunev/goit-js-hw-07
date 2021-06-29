const categoriesEl = document.querySelector('#categories').querySelectorAll('.item');

console.log(`В списке ` + categoriesEl.length + ` категории.`);

for (const category of categoriesEl) {
 
    
    console.log(`Категория: ` + category.firstElementChild.textContent);
    console.log(`Количество элементов: ` + category.lastElementChild.children.length);

};