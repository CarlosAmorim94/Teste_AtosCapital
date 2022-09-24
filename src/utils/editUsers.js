import { getDetail } from "./getDetail.js";
import { editUser } from "./editUser.js";

const editForm = document.querySelector(".form-edit");
const editNameInput = document.querySelector("#name-edit");
const editEmailInput = document.querySelector("#email-edit");
const editGenderInput = document.querySelector("#gender-edit");
const editStatusInput = document.querySelector("#status-edit");

const paramsURL = new URL(window.location);
const id = paramsURL.searchParams.get("id");

getDetail(editNameInput, editEmailInput, editGenderInput, editStatusInput, id);

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  editUser(editNameInput, editEmailInput, editGenderInput, editStatusInput, id);
});
