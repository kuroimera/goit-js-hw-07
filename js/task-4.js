const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formEl = event.target;
  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const savedForm = {
    email: email,
    password: password,
  };

  console.log(savedForm);

  formEl.reset();
});
