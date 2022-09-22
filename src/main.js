import { getUsers } from "./services/getUsers.js";

getUsers();

export function editUser(id) {
  console.log("clicou", id);
}

export function deleteUser(id) {
  console.log("deletou", id);
}
