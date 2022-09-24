import { variables } from "./variables.js";

export async function addUser(newUser) {
  await fetch(variables.baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${variables.token}`,
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (response) {
        return response;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
