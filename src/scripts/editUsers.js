const token =
  "592116e2b217eea89dbd106c1736451b52d79a4b1d0e0fd8ea526c3ec0c2bd32";
const baseURL = "https://gorest.co.in/public/v2/users";
const editForm = document.querySelector(".form-edit");
const editNameInput = document.querySelector("#name-edit");
const editEmailInput = document.querySelector("#email-edit");
const editGenderInput = document.querySelector("#gender-edit");
const editStatusInput = document.querySelector("#status-edit");

const paramsURL = new URL(window.location);
const id = paramsURL.searchParams.get("id");

async function getDetail() {
  const userDetail = await fetch(`${baseURL}/${id}`)
    .then((user) => user.json())
    .catch((error) => {
      console.error("Error:", error);
    });

  editNameInput.value = userDetail.name;
  editEmailInput.value = userDetail.email;
  editGenderInput.value = userDetail.gender;
  editStatusInput.value = userDetail.status;
}

async function editUser() {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id,
      name: editNameInput.value,
      email: editEmailInput.value,
      gender: editGenderInput.value,
      status: editStatusInput.value,
    }),
  });

  alert("Atualizado com sucesso!");
  location.href = `/index.html`;
}

getDetail();

console.log(editEmailInput.value);

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  editUser();
});
