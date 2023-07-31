import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { todoListData } from "./data/todoListData";
import { addToTodoList } from "./todoListFunction/addToTodoList";
import { removeFromList } from "./todoListFunction/removeFromList";
import { openEditModalWithData } from "./todoListFunction/openEditModalWithData";
import { renderTodoList } from "./renderFunctions/renderTodoList";
import { getDataToInfoTable } from "./todoListFunction/getDataToInfoTable";
import { addToArchive } from "./todoListFunction/addToArchive";

const tableBody = document.querySelector(".table-body");
const addNoteForm = document.querySelector("#add-note-form");

renderTodoList(todoListData, tableBody);

const onListenTableRow = (event) => {
  if (event.target.name === "remove") {
    removeFromList(todoListData, event.target.dataset);
  }
  if (event.target.name === "edit") {
    openEditModalWithData(todoListData, event.target.dataset);
  }
  if (event.target.name === "archive") {
    addToArchive(todoListData, event.target.dataset);
  }
};

tableBody.addEventListener("click", onListenTableRow);
addNoteForm.addEventListener("submit", addToTodoList);

getDataToInfoTable(todoListData);
