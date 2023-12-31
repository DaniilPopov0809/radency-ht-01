import Notiflix from "notiflix";
import { renderRemoveFromTodoList } from "../renderFunctions/renderRemoveFromTodoList";
import { getDataToInfoTable } from "./getDataToInfoTable";

export const removeFromList = (data, { id }) => {
  try {
    const index = data.findIndex((el) => el.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      renderRemoveFromTodoList(id);
      getDataToInfoTable(data);
      Notiflix.Notify.success("Deleted successfully");
    }
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};
