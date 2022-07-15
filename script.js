const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // não enviar o formulário
});
