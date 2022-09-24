import { variables } from "./variables.js";

export async function deleteUser(id) {
  await fetch(`${variables.baseURL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${variables.token}` },
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
