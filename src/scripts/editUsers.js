import { variables } from "../utils/variables.js";

const editForm = document.querySelector(".form-edit");
const editNameInput = document.querySelector("#name-edit");
const editEmailInput = document.querySelector("#email-edit");
const editGenderInput = document.querySelector("#gender-edit");
const editStatusInput = document.querySelector("#status-edit");

const paramsURL = new URL(window.location);
const id = paramsURL.searchParams.get("id");

async function getDetail() {
  const userDetail = await fetch(`${variables.baseURL}/${id}`)
    .then((user) => user.json())
    .catch((error) => {
      console.error("Error:", error);
    });

  editNameInput.value = userDetail.name;
  editEmailInput.value = userDetail.email;
  editGenderInput.value = userDetail.gender;
  editStatusInput.value = userDetail.status;
}

async function editUser() {
  const response = await fetch(`${variables.baseURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${variables.token}`,
    },
    body: JSON.stringify({
      id,
      name: editNameInput.value,
      email: editEmailInput.value,
      gender: editGenderInput.value,
      status: editStatusInput.value,
    }),
  });

  alert("Atualizado com sucesso!");
  location.href = `/index.html`;
}

getDetail();

console.log(editEmailInput.value);

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  editUser();
});
