import { todoTableRowMarkup } from "../const/todoTableRowMarkup";

export const renderEditTodoList = (data, id) => {
  const editRow = document.querySelector(`[data-id="${id}"]`);
  editRow.innerHTML = todoTableRowMarkup(data);
};
