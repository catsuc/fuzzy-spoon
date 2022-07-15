const formElement = document.querySelector("form");
const inputEmail = document.querySelector(".email");
const inputDate = document.querySelector(".date");
const textAreaMessage = document.querySelector("#message");

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // não enviar o formulário
  const dataForm = {
    email: inputEmail.value,
    date: inputDate.value,
    message: textAreaMessage.value,
  };
  return dataForm;
});
