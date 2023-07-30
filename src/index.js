import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {todoListData} from "./data/todoListData"
import renderTodoList from './renderFunctions/renderTodoList';

const tableBody = document.querySelector(".tableBody");
console.log("🚀 ~ file: index.js:6 ~ tableBody:", tableBody)
const addButton = document.querySelector(".addButton");

renderTodoList(todoListData, tableBody);


// const onListenEvent = (event) => {
//   event
// }

// tableBody.addEventListener('click', onListenEvent);



// removeButton.addEventListener("click", removeFromList);

// const addToList = (event) => {
//     console.log(event.target);
//     console.log("I btn")
// }

// const listenEvent = (event) => {
//     console.log("Work");
//     console.log(event.target);
//     console.log(event.currentTarget);
//   }

// addButton.addEventListener("click", addToList);

// tableBody.addEventListener("click", listenEvent);




