const ul = document.guerySelector('.categories');
const items = ul.guerySelectorAll('.li');
console.log(items.length);
const categories = document.querySelectorAll('.categories .item');
categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li').length;
    console.log('Category:  ${title}');
    console.log('Elements: ${elements}');
});