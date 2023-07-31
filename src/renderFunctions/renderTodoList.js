import { todoTableRowMarkup } from "../markup/todoTableRowMarkup";

export const renderTodoList = (data, element, param) => {
  const titleTable = document.querySelector(".title");
  param
    ? (titleTable.innerHTML = "Archive")
    : (titleTable.innerHTML = "ToDO List");
  element.innerHTML = "";
  data.map((item) => {
    if (item.archive === param) {
      element.insertAdjacentHTML("beforeend", todoTableRowMarkup(item));
    }
  });
};
