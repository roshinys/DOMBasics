// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.body);
// const title = (document.title = "New Title");
// console.log(title);
// console.log(document.all[10]);
// document.all[10].innerText = "Items";
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// headerTitle.innerHTML = `<h3>Items</h3>`;
// headerTitle.innerText = "Items"
// header.style.borderBottom = "3px solid black";
// var addItem = document.getElementById("addItem");
// addItem.style.color = "green";
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// const thirdElement = items[2];
// thirdElement.style.backgroundColor = "green";
// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "Bold";
// }
// var li = document.getElementsByTagName("li");
// console.log(li);
// for (let i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = "Bold";
// }
//QuerySelector
// var headerTitle = document.querySelector("#header-title");
// console.log(headerTitle);
// headerTitle.innerText = "chamged Item";
// var li = document.querySelectorAll("li");
// var secondLi = document.querySelector(".list-group-item:nth-child(2)");
// console.log(secondLi);
// secondLi.style.backgroundColor = "green";
// var thirdLi = document.querySelector(".list-group-item:nth-child(3)");
// thirdLi.style.color = "white";
// thirdLi.style.display = "none";

// var secondLi = document.querySelector(".list-group-item:nth-child(2)");
// console.log(secondLi);
// secondLi.style.color = "green";
// var li = document.querySelectorAll("li");
// for (let i = 0; i < li.length; i++) {
//   if (i % 2 == 0) {
//     li[i].style.backgroundColor = "green";
//   }
// }

//Traversing the DOM
//parentNode and ParentElement
// var parent = document.querySelector("#items");
// var node = parent.parentNode;
// console.log(parent.parentNode.parentNode);
// node.style.backgroundColor = "#f4f4f4";

// var parent = document.querySelector("#items");
// console.log(parent);
// var node = parent.parentElement;
// console.log(parent.parentElement.parentElement);
// node.style.backgroundColor = "#f4f4f4";

//traersing child nodes
// var child = parent.childNodes;
// console.log(child);
// var newChild = parent.children;
// newChild[1].style.backgroundColor = "green";

// console.log(parent.firstChild);
// console.log(parent.firstElementChild);
// var firstChild = parent.firstElementChild;
// firstChild.innerText = "Hello World";

// console.log(parent.lastChild);
// console.log(parent.lastElementChild);
// var lastChild = parent.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

//siblings
//nextsibling
// var itemList = document.querySelector("#items");
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

//createElement

//create a div
// var newDiv = document.createElement("div");
//create class
// newDiv.className = "hello";
//add it
// newDiv.id = "hello id";
//add attribute to it
// newDiv.setAttribute("title", "hello title");
//add text to it
// var newDivText = document.createTextNode("Hello Text");
//add text to new Div
// newDiv.appendChild(newDivText);

//add to DOM
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1);

// console.log(newDiv);
//var newItem = document.createElement("li");
// newItem.className = "list-group-item";
// var newItemText = document.createTextNode("New First Kid");
// newItem.appendChild(newItemText);

// var container = document.querySelector("#main #items");
// var firstKid = container.firstElementChild;
// container.appendChild(newItem);
// container.insertBefore(newItem, firstKid);
// console.log(container);
// console.log(newItem);

var form = document.getElementById("addForm");
var itemList = document.querySelector("#items");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  var deletebtn = document.createElement("button");
  deletebtn.className = "btn btn-danger btn-sm float-right delete";
  deletebtn.appendChild(document.createTextNode("edit"));
  li.appendChild(deletebtn);
  itemList.appendChild(li);
  console.log(li);
});

itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
});
