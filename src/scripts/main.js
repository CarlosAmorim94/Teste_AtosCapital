import { deleteUser } from "../utils/deleteUser.js";
import { addUser } from "../utils/addUser.js";
import { variables } from "../utils/variables.js";

const form = document.querySelector(".form-active");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const genderInput = document.querySelector("#gender");
const statusInput = document.querySelector("#status");

async function getUsers() {
  const tbody = document.querySelector(".tbody");
  const response = await fetch(`${variables.baseURL}`)
    .then((users) => users.json())
    .catch((error) => {
      console.error("Error:", error);
    });

  response.map((user) => {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let name = document.createElement("td");
    let email = document.createElement("td");
    let columnButtons = document.createElement("td");

    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    columnButtons.appendChild(editButton);
    columnButtons.appendChild(deleteButton);

    columnButtons.classList.add("action-buttons");

    editButton.addEventListener("click", () => editUsers(user.id));
    deleteButton.addEventListener("click", () => deleteUsers(user.id));

    id.innerHTML = user.id;
    name.innerHTML = user.name;
    email.innerHTML = user.email;
    editButton.innerHTML = "Editar";
    deleteButton.innerHTML = "Excluir";

    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(email);
    tr.appendChild(columnButtons);

    return tbody.appendChild(tr);
  });
}

async function addUsers() {
  const newUser = {
    name: nameInput.value,
    email: emailInput.value,
    status: statusInput.value,
    gender: genderInput.value,
  };

  addUser(newUser);
  alert("Usuário cadastrado!");
  location.href = "../../index.html";
}

async function editUsers(id) {
  location.href = `/src/pages/edit_users.html?id=${id}`;
}

async function deleteUsers(id) {
  deleteUser(id);
  alert("Item deletado!");
  location.reload();
}

getUsers();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addUsers();
});
