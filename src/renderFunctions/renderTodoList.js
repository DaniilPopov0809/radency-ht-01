import { todoTableRowMarkup } from "../const/todoTableRowMarkup";

export const renderTodoList = (data, element) => {
  data.map((item) =>
    element.insertAdjacentHTML("beforeend", todoTableRowMarkup(item))
  );
};
