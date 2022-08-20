const buttonEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const ul = document.querySelector("ul");
const list = document.querySelectorAll("ul>li");

function inputValue() {
  return inputEl.value.length;
}

function createListEl() {
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "btn");
  deleteButton.appendChild(document.createTextNode("Delete"));

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(inputEl.value));
  ul.appendChild(li).addEventListener("click", toggleList);
  inputEl.value = "";
  ul > li.appendChild(deleteButton).addEventListener("click", removeItem);
}

function addAfterClick() {
  if (inputValue() > 0) {
    createListEl();
  }
}

function addAfterEnter(event) {
  if (inputValue() > 0 && event.key === "Enter") {
    createListEl();
  }
}

buttonEl.addEventListener("click", addAfterClick);

inputEl.addEventListener("keypress", addAfterEnter);

const listEl = document.querySelectorAll("ul>li");
for (var i = 0; i < listEl.length; i++) {
  listEl[i].addEventListener("click", toggleList);
}
function toggleList() {
  event.target.classList.toggle("done");
}

var elements = document.getElementsByClassName("btn");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", removeItem);
}

function removeItem() {
  this.parentNode.remove();
}
