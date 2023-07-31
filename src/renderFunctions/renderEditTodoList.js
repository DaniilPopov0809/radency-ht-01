import { todoTableRowMarkup } from "../markup/todoTableRowMarkup";

export const renderEditTodoList = (data, id) => {
  const editRow = document.querySelector(`[data-id="${id}"]`);
  editRow.innerHTML = todoTableRowMarkup(data);
};
