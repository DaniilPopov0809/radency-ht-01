import { tableRowMarkup } from "../const/tableRowMarkup";

export const renderTodoList = (data, element) => {
  data.map((item) =>
    element.insertAdjacentHTML("beforeend", tableRowMarkup(item))
  );
};


