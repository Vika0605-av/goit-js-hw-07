const ul = document.querySelector('#categories');
const items = ul.querySelectorAll('li');
console.log(items.length);
const categories = document.querySelectorAll('.categories .item');
categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li').length;
    console.log(`Category:  ${title}`);
    console.log(`Elements: ${elements}`);
});