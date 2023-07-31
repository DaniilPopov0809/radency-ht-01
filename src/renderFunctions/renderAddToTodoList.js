import { todoTableRowMarkup } from "../const/todoTableRowMarkup";

export const renderAddToTodoList = (item) => {
  const tableBody = document.querySelector(".table-body");

  tableBody.insertAdjacentHTML("beforeend", todoTableRowMarkup(item));
};
