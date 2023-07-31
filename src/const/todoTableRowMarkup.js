import { truncateString } from "../helpers/truncateString";

export const todoTableRowMarkup = (item) =>
  `<tr class='table-row' data-id='${item.id}'>
<td>${item.title}</td>
<td>${item.created}</td>
<td>${item.category}</td>
<td>${truncateString(item.content, 25)}</td>
<td>${item.dates.join(", ")}</td>
<td>
    <div>  
        <button type="button" class="btn btn-primary" name='edit' data-id="${item.id}">Edit</button>
        <button type="button" class="btn" name='archive'data-id="${item.id}">Archive</button>
        <button type="button" class="btn remove-button" name='remove' data-id="${
          item.id
        }">Remove</button>
    <div>
</td>
</tr>`;
