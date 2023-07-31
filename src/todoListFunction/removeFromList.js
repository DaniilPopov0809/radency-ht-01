import { renderRemoveFromTodoList } from "../renderFunctions/renderRemoveFromTodoList";

export const removeFromList = (data, { id }) => {
  const index = data.findIndex((el) => el.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    renderRemoveFromTodoList(id);
  }
};
