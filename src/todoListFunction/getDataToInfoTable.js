import { countCategory } from "../helpers/countCategory";
import { renderInfoTable } from "../renderFunctions/renderInfoTable";
import { categories } from "../const/categories";

export const getDataToInfoTable = (data) => {
  const dataToRender = categories.map((el) => {
    return { category: el, active: countCategory(data, el), archived: 0 };
  });
  console.log(
    "🚀 ~ file: getDataToInfoTable.js:10 ~ dataToRender ~ dataToRender:",
    dataToRender
  );
  renderInfoTable(dataToRender);
  // const category = countCategory(data, "Task");
  // const idea = countCategory(data, "Idea");
  // const thouth = countCategory(data, "Random Thought");

  // const dataToRender = [
  //     { category: "Task", active: category, },
  //     { category: "Idea", active: idea, },
  //     { category: "Random Thought", active: thouth, }
  //   ]
};
