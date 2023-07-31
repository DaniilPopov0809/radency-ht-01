import { tableRowMarkup } from "../const/tableRowMarkup";

export const renderEditTodoList = (data, id) => {
 
  const editRow = document.querySelector(`[data-id="${id}"]`);
  editRow.innerHTML = tableRowMarkup(data);
 
  
};
