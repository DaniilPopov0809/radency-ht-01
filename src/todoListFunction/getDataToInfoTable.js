import Notiflix from "notiflix";
import { countCategory } from "../helpers/countCategory";
import { renderInfoTable } from "../renderFunctions/renderInfoTable";
import { categories } from "../data/categories";

export const getDataToInfoTable = (data) => {
  try {
    const dataToRender = categories.map((el) => {
      return {
        category: el,
        active: countCategory(data, el, false),
        archived: countCategory(data, el, true),
      };
    });
    renderInfoTable(dataToRender);
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};
