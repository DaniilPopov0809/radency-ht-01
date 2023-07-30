import { operationsTodoList } from "../todoListFunction";
// import { nanoid } from 'nanoid'

const renderTodoList = (data, element) => {
  data.map((item) => {
    const row = document.createElement("tr");
    row.classList.add("tableRow");
    row.setAttribute("data-index", `${item.id}`);
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.created}</td>
        <td>${item.category}</td>
        <td>${item.content.join(", ")}</td>
        <td>${item.dates}</td>
        <td>
            <div>
                <button class="btn" data-index="${item.id}">Edit</button>
                <button class="btn" data-index="${item.id}">Archive</button>
                <button class="btn removeButton" data-index="${
                  item.id
                }">Remove</button>
            <div>
        </td>
      `;
    element.appendChild(row);

    const removeButton = row.querySelector(".removeButton");

    removeButton.addEventListener("click", () => {
      const result = operationsTodoList.removeFromList(data, item.id);
      if (result) {
        element.removeChild(row);
      }
    });
  });
};

export default renderTodoList;
