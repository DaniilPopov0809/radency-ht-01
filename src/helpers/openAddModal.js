import { Modal } from "bootstrap";
import { addToTodoList } from "../todoListFunction/addToTodoList";

export const openAddModal = () => {
  const addModal = new Modal(document.querySelector("#addModal"));

  document.querySelector("#add-title-note").value = "";
  document.querySelector("#add-category").value = "";
  document.querySelector("#add-textarea").value = "";
  document.querySelector("#add-date").value = "";

  function handleSubmit(event) {
    if (!addToTodoList(event)) {
      return;
    }
    addNoteForm.removeEventListener("submit", handleSubmit);
    addModal.hide();
  }

  const addNoteForm = document.querySelector("#add-note-form");

  addNoteForm.addEventListener("submit", handleSubmit);
  addModal.show();
};