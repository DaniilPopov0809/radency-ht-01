import { todoTableRowMarkup } from "../markup/todoTableRowMarkup";

export const renderAddToTodoList = (item) => {
  const tableBody = document.querySelector(".table-body");

  tableBody.insertAdjacentHTML("beforeend", todoTableRowMarkup(item));
};
