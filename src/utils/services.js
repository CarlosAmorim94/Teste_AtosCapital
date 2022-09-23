import { variables } from "./variables.js";

async function deleteItem(id) {
  await fetch(`${variables.baseURL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${variables.token}` },
  }).catch((error) => {
    console.error("Error:", error);
  });
}

export const services = {
  deleteItem,
};
