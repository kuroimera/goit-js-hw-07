// --- робимо через інпут(бо скрипт відбуваєтьс ПІДЧАС набору тексту)
// --- пріглашаєм до джс те що вводимо і те що виводимо
// --- додаєму слухачала подій до поля вводу з типом інпут, прописуємо функцію в якій
// --- текст вихідного тексту це  значення у середині таргету(тобто нашшого інпута)

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (nameInput.value.trim() === "") {
    return (nameOutput.textContent = "Anonymous");
  }

  nameOutput.textContent = event.target.value.trim();
});

//
