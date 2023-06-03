const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const validation = (text) => {
  return text ? true : false;
};

const addTask = () => {
  if (validation(inputBox.value)) {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#9587;";
    li.appendChild(span);
  } else {
    alert("Text field is empty");
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};
const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
showTask();

const addButton = document.querySelector(".add");
addButton.addEventListener("click", addTask);
