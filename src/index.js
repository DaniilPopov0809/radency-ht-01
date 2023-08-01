import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { todoListData } from "./data/todoListData";
import { openAddModal } from "./helpers/openAddModal";
import { removeFromList } from "./todoListFunction/removeFromList";
import { openEditModalWithData } from "./helpers/openEditModalWithData";
import { renderTodoList } from "./renderFunctions/renderTodoList";
import { getDataToInfoTable } from "./todoListFunction/getDataToInfoTable";
import { toggleToArchive } from "./todoListFunction/toggleToArchive";

const tableBody = document.querySelector(".table-body");
const createNote = document.querySelector("#create-note");
const showArchive = document.querySelector("#show-archive");
const showTodo = document.querySelector("#show-todo-list");

renderTodoList(todoListData, tableBody, false);

const onListenTableRow = (event) => {
  if (event.target.name === "remove") {
    removeFromList(todoListData, event.target.dataset);
  }
  if (event.target.name === "edit") {
    openEditModalWithData(todoListData, event.target.dataset);
  }
  if (event.target.name === "archive") {
    toggleToArchive(todoListData, event.target.dataset);
  }
};

tableBody.addEventListener("click", onListenTableRow);
createNote.addEventListener("click", openAddModal);
showArchive.addEventListener("click", () =>
  renderTodoList(todoListData, tableBody, true)
);
showTodo.addEventListener("click", () =>
  renderTodoList(todoListData, tableBody, false)
);
getDataToInfoTable(todoListData);
