const token =
  "592116e2b217eea89dbd106c1736451b52d79a4b1d0e0fd8ea526c3ec0c2bd32";
const baseURL = "https://gorest.co.in/public/v2/users";
const form = document.querySelector(".form-active");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const genderInput = document.querySelector("#gender");
const statusInput = document.querySelector("#status");

async function getUsers() {
  const tbody = document.querySelector(".tbody");
  const response = await fetch(`${baseURL}`)
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
}

async function addUser() {
  const newUser = {
    name: nameInput.value,
    email: emailInput.value,
    status: statusInput.value,
    gender: genderInput.value,
  };

  console.log(newUser);

  await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newUser),
  }).catch((error) => {
    console.error("Error:", error);
  });
}

async function editUser(id) {
  location.href = `/src/pages/edit_users.html?id=${id}`;
}

async function deleteUser(id) {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).catch((error) => {
    console.error("Error:", error);
  });
  alert("Item deletado!");
  location.reload();
}

getUsers();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addUser();
});