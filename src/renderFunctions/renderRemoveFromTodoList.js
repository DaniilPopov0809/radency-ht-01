export const renderRemoveFromTodoList = (id) => {
  const tableBody = document.querySelector(".table-body");
  const removeRow = document.querySelector(`[data-id="${id}"]`);
  tableBody.removeChild(removeRow);
};
