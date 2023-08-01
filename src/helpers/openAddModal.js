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
    addModal.hide();
    addNoteForm.removeEventListener("submit", handleSubmit);
  }

  const addNoteForm = document.querySelector("#add-note-form");
  addNoteForm.addEventListener("submit", (event) => handleSubmit(event));
  addModal.show();
};
