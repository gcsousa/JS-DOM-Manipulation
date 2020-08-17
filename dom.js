/* ********************************
* Video 1
// Examine Document object
// Selectors
// *        getElementById() - returns and Element object  matching id passed in
// *        getElementsByClassName() - returns an array like object of all children with given class name
// *        getElementsByTagName() - returns a list of elements with the given tag name.  The complete document is search, including the root node.
// *        querySelector() - returns first element with provided selector.  Prefis with # for a id, or a '.' for a class name.
// *        querySelectorAll() - similar to querySelector but returns  a NodeList of all elements matching selector.
**************************************/

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

// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

/**************************
* Video 2: moving around and traversing the DOM
*
*  Parents
*         .parentNode  - returns the parentNode of this current node (read only property) or null
*         .parentElement - returns the DOM nodes parent element of current element (read only) or null
* Children
*         .childNodes
*         .children
*         .firstChild
*         .firstElementChild
*         .lastChild & .lastElementChild
* Siblings
*         .nextSibling
*         .nextElementSibling
*         .previousSibling
*         .previousElementSibling
* Create Elements
*         .createElement()
*         .createTextNode()
*         .appendChild()
* Insert Created Elements Into the DOM
*         .insertBefore()
****************************/

let itemList = document.querySelector('#items');
// // parentNode property
// console.log(itemList.parentNode);   // prints line 20 of html file which is the div with id of main
// itemList.parentNode.style.backgroundColor = '#f4f4f4'; // change background color of "main" to light grey 

// // you can chain .parentNode(s) together to climb the tree
// console.log(itemList.parentNode.parentNode);    // returns line 19 from HTML file, the div with class "container"

// parentElement is very similar to parentNode and in most cases can be used interchangably with parentNode
// console.log(itemList.parentElement);  // returns line 20 of HTML file.  Note:  this is the same object as .parentNode above.
// itemList.parentElement.style.backgroundColor = '#f4f4f4'; // same behavior as parentNode
// console.log(itemList.parentElement.parentElement);  // again, same as parentNode, can be chained

// childNodes
//console.log(itemList.childNodes);   // returns a node list, in this case the list of li elements
// Note:  childNodes returns a text element between each actual li element.  This represents the line breaks in the source HTML file.  For this reason its recommended to use .children which should only grab the li elements themselves.
// NodeList(9) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text]
// 0: text
// 1: li.list-group-item
// 2: text
// 3: li.list-group-item
// 4: text
// 5: li.list-group-item
// 6: text
// 7: li.list-group-item
// 8: text
// length: 9
// __proto__: NodeList

//console.log(itemList.children); // returns an HTMLCollection which is slightly different from a NodeList but this is much cleaner than the .childNodes property
// HTMLCollection(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]
// 0: li.list-group-item
// 1: li.list-group-item
// 2: li.list-group-item
// 3: li.list-group-item
// length: 4
// __proto__: HTMLCollection
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';  // you can use .children as a select to change the dom // results in : <li class="list-group-item" style="background-color: yellow;">Item 2</li>

// firstChild
//console.log(itemList.firstChild); // also returns the text elements which are the line breaks again, use firstElementChild instead
// firstElementChild
//console.log(itemList.firstElementChild);  // returns:  <li class="list-group-item">Item 1</li> as expected.
//itemList.firstElementChild.textContent = "Changed using firstElementChild selector";

// lastChild - similar to first child my return text representing line break.  use lastElementChild instead
//console.log(itemList.lastChild);    // returns: #text   : use lastElementChild instead

// lastElementChild
//console.log(itemList.lastElementChild);  // returns last li item which is what you would expect.
// returns:  <li class="list-group-item">Item 4</li>

//itemList.lastElementChild.textContent = "Changed using lastElementChild selector";

// Siblings
// nextSibling and nextElementSibling
// console.log(itemList.nextSibling);  // returns "#text" ie linefeeds in HTML doc
// console.log(itemList.nextElementSibling);   // returns null because there is no next object after <ul>

// previousSibling and previousElementSibling  (Don't use previousSibling because of the linefeed issue unless you want that behavior)
// console.log(itemList.previousSibling);  // returns "#text" ie linefeeds in HTML doc
// console.log(itemList.previousElementSibling);  // returns <h2 class="title">Items</h2> : as expected
// itemList.previousElementSibling.style.color = 'green'; // changes text color of h2 to green

// Creating DOM elements
// createElement
// create a div
let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
// create text node
let newDivText = document.createTextNode('Hello World');
// add text to div
newDiv.appendChild(newDivText);
// add div to DOM
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);
