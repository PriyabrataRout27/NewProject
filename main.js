var form = document.getElementById('addFrom');
var itemList = documentById('item');

//form submit event
form.addEventListener('submit',addItem);

//Add item
function addItem(e)
{
e.preventDefault();

//get input value
var newItem = document.getElementById();

//Create new li Element
var li=document.createElement('li');

//add class
li.className='list-group-item';

//add text node with input value
li.appendChild(document.createTextNode(newItem));

}