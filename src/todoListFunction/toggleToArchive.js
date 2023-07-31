import Notiflix from "notiflix";
import { renderRemoveFromTodoList } from "../renderFunctions/renderRemoveFromTodoList";
import { getDataToInfoTable } from "./getDataToInfoTable";

export const toggleToArchive = (data, { id }) => {
  try {
    const index = data.findIndex((el) => el.id === id);
    if (index !== -1) {
      data[index].archive = !data[index].archive;
      renderRemoveFromTodoList(id);
      getDataToInfoTable(data);
      Notiflix.Notify.success("Added to archive successfully");
    }
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};
