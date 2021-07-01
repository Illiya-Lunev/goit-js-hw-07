const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




const galleryRef = document.querySelector('#gallery');
const createGallery = image => {
  const itemRef = document.createElement('li');
  itemRef.classList.add(`gallery__item`)
  const imageRef = document.createElement('img');
  itemRef.appendChild(imageRef);
  imageRef.src = image.url;
  imageRef.width = 440;
  imageRef.height = 300;
  return itemRef;
};
const elementListRef = images.map(image => createGallery(image));
galleryRef.append(...elementListRef);

console.log(galleryRef);

// const containerImgEl = document.querySelector(`#gallery`);
// console.log(containerImgEl);

// const galleryList = images.map(images => {
//     const { url, alt } = images;
//     return `<li><img src= ${url} alt= ${alt}/></li>`;

// });


// console.log(galleryList);


// containerImgEl.insertAdjacentHTML(`beforeend`, galleryList.join(' '));




// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.