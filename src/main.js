const tokken =
  "592116e2b217eea89dbd106c1736451b52d79a4b1d0e0fd8ea526c3ec0c2bd32";

const baseURL = "https://gorest.co.in/public/v2";

const getUsers = async () => {
  const tbody = document.querySelector(".tbody");
  const response = await fetch(`${baseURL}/users`).then((users) =>
    users.json()
  );

  for (let i = 0; i < response.length; i++) {
    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${response[i].id}</td>
      <td>${response[i].name}</td>
      <td>${response[i].email}</td>
      <td class="action-button">
        <button onclick="editUser(${response[i].id})">Editar</button>
      </td>
      <td class="action-button">
        <button onclick="deleteUser(${response[i].id})">Excluir</button>
      </td>     
    `;
    tbody.appendChild(tr);
  }
};

getUsers();
