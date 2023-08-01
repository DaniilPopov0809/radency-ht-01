import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import { renderAddToTodoList } from "../renderFunctions/renderAddToTodoList";
import { todoListData } from "../data/todoListData";
import { getCurrentDate } from "../helpers/getCurrentDate";
import { formatDate } from "../helpers/formatDate";
import { getDataToInfoTable } from "./getDataToInfoTable";
import { checkDate } from "../helpers/checkDate";

export const addToTodoList = (event) => {
  event.preventDefault();
  try {
    const title = document.querySelector("#add-title-note").value;
    const category = document.querySelector("#add-category").value;
    const content = document.querySelector("#add-textarea").value;
    let date = document.querySelector("#add-date").value;

    if (date) {
      if (!checkDate(date, "error-message-add-form")) {
        return false;
      }
      date = formatDate(date);
    } else {
      date = [];
    }

    const data = {
      id: nanoid(),
      title,
      created: getCurrentDate(),
      category,
      content,
      dates: [date],
    };
    todoListData.push(data);
    renderAddToTodoList(data);

    getDataToInfoTable(todoListData);

    Notiflix.Notify.success("Added successfully");
    return true;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return false;
  }
};
