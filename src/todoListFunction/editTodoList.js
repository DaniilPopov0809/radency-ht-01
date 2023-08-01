import Notiflix from "notiflix";
import { formatDate } from "../helpers/formatDate";
import { renderEditTodoList } from "../renderFunctions/renderEditTodoList";
import { getDataToInfoTable } from "./getDataToInfoTable";
import { checkDate } from "../helpers/checkDate";

export function editTodoList(event, data, index, id) {
  event.preventDefault();
  try {
    const title = document.querySelector("#edit-title-note").value;
    const category = document.querySelector("#edit-category").value;
    const content = document.querySelector("#edit-textarea").value;
    let date = document.querySelector("#edit-date").value;

    const lastDate = data[index].dates[data[index].dates.length - 1];

    if (date && !checkDate(date, "error-message-edit-form")) {
      return false;
    }

    if (date && formatDate(date) !== lastDate) {
      date = formatDate(date);
      data[index] = {
        ...data[index],
        title,
        category,
        content,
        dates: [...data[index].dates, date],
      };
    } else if (date && formatDate(date) === lastDate) {
      data[index] = {
        ...data[index],
        title,
        category,
        content,
      };
    } else {
      date = [];
      data[index] = {
        ...data[index],
        title,
        category,
        content,
        dates: date,
      };
    }

    renderEditTodoList(data[index], id);
    getDataToInfoTable(data);
    Notiflix.Notify.success("Edited successfully");
    return true;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return false;
  }
}
