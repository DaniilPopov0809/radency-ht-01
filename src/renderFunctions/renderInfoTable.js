import { InfoTableRowMarkup } from "../markup/infoTableRowMarkup";

export const renderInfoTable = (data) => {
  const infoTableBody = document.querySelector(".table-info-body");
  infoTableBody.innerHTML = "";
  data.map((item) =>
    infoTableBody.insertAdjacentHTML("beforeend", InfoTableRowMarkup(item))
  );
};
