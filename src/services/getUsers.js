import { editUser, deleteUser } from "../main.js";
import { baseURL } from "./variables.js";

export const getUsers = async () => {
  const tbody = document.querySelector(".tbody");
  const response = await fetch(`${baseURL}/users`)
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

    editButton.addEventListener("click", () => editUser(user.id));
    deleteButton.addEventListener("click", () => deleteUser(user.id));

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
};
