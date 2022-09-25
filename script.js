const formElement = document.querySelector("form");
const inputEmail = document.querySelector("#email");
const inputDate = document.querySelector("#date");
const textAreaMessage = document.querySelector("#message");
const saveMessage = document.querySelector("#save-message");

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // não enviar o formulário

  const messageData = {
    message: textAreaMessage.value, // > 0
    targetEmail: inputEmail.value, // valid email
    targetDate: inputDate.value, // yyyy-m-d
  };

  saveMessage.disabled = true

  fetch("https://crispy-fortnight.catsuc.com/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageData),
  })
    .then(() => Toastify({
      text: "Mensagem enviada com sucesso",
      className: "toast-success"
    }).showToast())
    .catch((error) => Toastify({
      text: "algo deu errado",
      className: "toast-failure"
    }).showToast())
    .finally(() => (saveMessage.disabled = false));
});
