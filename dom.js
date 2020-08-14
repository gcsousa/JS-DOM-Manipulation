// Examine Document object

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title)
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.all[10]);
// console.log(document.links);

// Selectors
// getElementById
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
//console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// // textContent doesn't care about styling.  Here 123 is display:none but text content still shows it
// console.log(headerTitle.textContent);  // DISPLAYS:  Item Lister 123
// // innerText cares about style
// console.log(headerTitle.innerText);     // DISPLAYS: Item Lister   -- the 123 is supressed by style of display:none

// headerTitle.innerHTML = '<h3>Hello</h3>'
//header.style.borderBottom = 'solid 3px black';

// getElementsByClassName
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';


// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// getElementsByTagName
// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// querySelector

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// querySelectorAll

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';
let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}