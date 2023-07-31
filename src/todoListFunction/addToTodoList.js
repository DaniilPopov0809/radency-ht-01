import { nanoid } from "nanoid";
import { renderAddToTodoList } from "../renderFunctions/renderAddToTodoList";
import { todoListData } from "../data/todoListData";
import { getCurrentDate } from "../helpers/getCurrentDate";
import { formatDate } from "../helpers/formatDate";
import { getDataToInfoTable } from "./getDataToInfoTable";

export const addToTodoList = (event) => {
  event.preventDefault();

  const title = document.querySelector("#add-title-note").value;
  const category = document.querySelector("#add-category").value;
  const content = document.querySelector("#add-textarea").value;
  let date = document.querySelector("#add-date").value;

  if (date) {
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

  document.querySelector("#add-title-note").value = "";
  document.querySelector("#add-category").value = "";
  document.querySelector("#add-textarea").value = "";
  document.querySelector("#add-date").value = "";
};
