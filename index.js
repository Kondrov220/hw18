//1
const categoriesList = document.querySelector("ul#categories");
console.log(categoriesList.outerHTML);
const categories = categoriesList.querySelectorAll("h2");
const listElement = categoriesList.querySelectorAll("ul");
console.log(`У списку ${categories.length} категорії.`);
for(let i = 0; i < categories.length; i++){
    let  listElementCount = listElement[i].childElementCount;
    console.log(`Категорія: ${categories[i].textContent}`);
    console.log(`Кількість елементів: ${listElementCount}`);
}
//2 
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];
   const ulElement =  document.querySelector("ul#ingredients");
  let liElement = [];
for(let i = 0; i < ingredients.length; i++){
 liElement.push(`<li>${ingredients[i]}</li>`);;
}
const text = liElement.join(" ");

ulElement.innerHTML = text;
//3
const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
   ];

let textElement = [];
for(let i = 0; i < images.length; i++){
textElement.push(`<li><img class="img" src="${images[i].url}" alt="${images[i].alt}"></li>`);
}
console.log(textElement);
const conectText = textElement.join(" ");
document.querySelector("ul#gallery").insertAdjacentHTML("afterbegin" , conectText);
//4
let counterValue = 0;
const min = document.querySelector("button[data-action='decrement']");
const plus = document.querySelector("button[data-action='increment']");
const b = document.querySelector("span#value");
// min.addEventListener("klick", () => {
// counterValue--;
// b.textContent = counterValue;
// });
min.addEventListener("click", () => {
counterValue--;
b.textContent = counterValue;
});
plus.addEventListener("click", () => {
counterValue++;
b.textContent = Number(counterValue);
});


