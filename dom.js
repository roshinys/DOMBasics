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

var secondLi = document.querySelector(".list-group-item:nth-child(2)");
console.log(secondLi);
secondLi.style.color = "green";
var li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  if (i % 2 == 0) {
    li[i].style.backgroundColor = "green";
  }
}
