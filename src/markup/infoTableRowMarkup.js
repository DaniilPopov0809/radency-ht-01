import { nanoid } from "nanoid";

export const InfoTableRowMarkup = (item) =>
  `<tr class='table-light' data-id='${nanoid()}'>
<td>${item.category}</td>
<td>${item.active}</td>
<td>${item.archived}</td>
</tr>`; 
