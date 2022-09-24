import { variables } from "./variables.js";

export async function editUser(name, email, gender, status, id) {
  await fetch(`${variables.baseURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${variables.token}`,
    },
    body: JSON.stringify({
      id,
      name: name.value,
      email: email.value,
      gender: gender.value,
      status: status.value,
    }),
  });

  alert("Atualizado com sucesso!");
  location.href = "/index.html";
}
