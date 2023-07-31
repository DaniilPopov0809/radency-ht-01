import { Modal } from "bootstrap";
import { deFormateDate } from "../helpers/deFormateDate";
import { editTodoList } from "./editTodoList";

export const openEditModalWithData = (data, { id }) => {
  const editModal = new Modal(document.querySelector("#editModal"));

  document.querySelector("#edit-title-note").value = "";
  document.querySelector("#edit-category").value = "";
  document.querySelector("#edit-textarea").value = "";
  document.querySelector("#edit-date").value = "";

  const index = data.findIndex((item) => item.id === id);
  const { title, category, content, dates } = data[index];

  document.querySelector("#edit-title-note").value = title;
  document.querySelector("#edit-category").value = category;
  document.querySelector("#edit-textarea").value = content;
  if (dates.length !== 0) {
    document.querySelector("#edit-date").value = deFormateDate(
      dates[dates.length - 1]
    );
  }

  function handleSubmit(event) {
    editTodoList(event, data, index, id);
    editNoteForm.removeEventListener("submit", handleSubmit);
  }

  const editNoteForm = document.querySelector("#edit-note-form");
  editNoteForm.addEventListener("submit", handleSubmit);
  editModal.show();
};
