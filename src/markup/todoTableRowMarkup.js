import { truncateString } from "../helpers/truncateString";

export const todoTableRowMarkup = (item) =>
  `<tr class='table-light' data-id='${item.id}'>
<td>${item.title}</td>
<td>${item.created}</td>
<td>${item.category}</td>
<td>${truncateString(item.content, 25)}</td>
<td>${item.dates.join(", ")}</td>
<td>
    <div>  
        <button type="button" class="btn btn-primary" name='edit' data-id="${
          item.id
        }"><ion-icon name="create-outline" style="pointer-events: none"></ion-icon></button>
        <button type="button" class="btn btn-primary" name='archive'data-id="${
          item.id
        }"><ion-icon name="archive-outline" style="pointer-events: none"></ion-icon></button>
        <button type="button" class="btn btn-primary" name='remove' data-id="${
          item.id
        }"><ion-icon name="trash-outline" style="pointer-events: none"></ion-icon>
        </button>
    <div>
</td>
</tr>`;
