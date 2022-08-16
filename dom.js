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
var li = document.getElementsByTagName("li");
console.log(li);
for (let i = 0; i < li.length; i++) {
  li[i].style.fontWeight = "Bold";
}
