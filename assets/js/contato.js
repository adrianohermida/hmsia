const form = document.querySelector('#contato-form');
const nameInput = document.querySelector('#contato-nome');
const emailInput = document.querySelector('#contato-email');
const messageInput = document.querySelector('#contato-mensagem');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Validação dos campos do formulário
  if (nameInput.value.trim() === '') {
    alert('Por favor, informe seu nome.');
    nameInput.focus();
    return;
  }
  
  if (emailInput.value.trim() === '') {
    alert('Por favor, informe seu email.');
    emailInput.focus();
    return;
  }
  
  if (!isValidEmail(emailInput.value.trim())) {
    alert('Por favor, informe um email válido.');
    emailInput.focus();
    return;
  }
  
  if (messageInput.value.trim() === '') {
    alert('Por favor, informe sua mensagem.');
    messageInput.focus();
    return;
  }

  // Envio do formulário
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Mensagem enviada com sucesso!');
      form.reset();
      nameInput.focus();
    } else {
      throw new Error('Ocorreu um erro ao enviar a mensagem.');
    }
  })
  .catch(error => {
    alert(error);
  });
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
