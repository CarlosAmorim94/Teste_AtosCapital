import { variables } from "./variables.js";

export async function getDetail(name, email, gender, status, id) {
  const userDetail = await fetch(`${variables.baseURL}/${id}`)
    .then((user) => user.json())
    .catch((error) => {
      console.error("Error:", error);
    });

  name.value = userDetail.name;
  email.value = userDetail.email;
  gender.value = userDetail.gender;
  status.value = userDetail.status;
}
