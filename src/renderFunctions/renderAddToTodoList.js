import { tableRowMarkup } from "../const/tableRowMarkup";

export const renderAddToTodoList = (item) => {
  const tableBody = document.querySelector(".table-body");

  tableBody.insertAdjacentHTML("beforeend", tableRowMarkup(item));
};
