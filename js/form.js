const form = document.querySelector("form");
const firstNameInput = document.querySelector(".first-name");
const lastNameInput = document.querySelector(".last-name");
const idInput = document.querySelector(".id");

const person = {
  id: null,
  firstName: "",
  lastName: "",
};

firstNameInput.value = person.firstName;
lastNameInput.value = person.lastName;
idInput.value = person.id;

firstNameInput.addEventListener("change", (e) => {
    
})