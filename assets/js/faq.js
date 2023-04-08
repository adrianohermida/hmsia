// Busca as perguntas e respostas do FAQ em um arquivo JSON hospedado no GitHub
fetch('https://raw.githubusercontent.com/seu-usuario/seu-repositorio/master/perguntas_respostas.json')
  .then(response => response.json())
  .then(data => {
    // Preenche as perguntas e respostas no HTML com base nos dados do arquivo JSON
    const faqBox = document.querySelector('.faq-box');
    const form = document.querySelector('#faq-form');
    const searchInput = document.querySelector('#faq-search-input');

    data.forEach(item => {
      const html = `
        <div class="accordion-item faq-bg wow fadeup-animation" data-wow-delay="${item.delay}">
          <h3 class="accordion-header h3-title" id="${item.id}">
            <button class="accordion-button faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#${item.target}" aria-expanded="${item.expanded}" aria-controls="${item.controls}">
              ${item.question}<span class="icon"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
            </button>
          </h3>
          <div id="${item.id}" class="accordion-collapse collapse ${item.show}" aria-labelledby="${item.id}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>${item.answer}</p>
            </div>
          </div>
        </div>
      `;
      faqBox.insertAdjacentHTML('beforeend', html);
    });

    // Adiciona um listener para o formulário de busca
    form.addEventListener('submit', event => {
      event.preventDefault();
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== '') {
        const results = data.filter(item => item.question.toLowerCase().includes(searchTerm.toLowerCase()));
        if (results.length > 0) {
          // Remove todas as perguntas e respostas da lista
          while (faqBox.firstChild) {
            faqBox.removeChild(faqBox.firstChild);
          }
          // Adiciona as perguntas e respostas correspondentes à busca
          results.forEach(item => {
            const html = `
              <div class="accordion-item faq-bg wow fadeup-animation" data-wow-delay="${item.delay}">
                <h3 class="accordion-header h3-title" id="${item.id}">
                  <button class="accordion-button faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#${item.target}" aria-expanded="${item.expanded}" aria-controls="${item.controls}">
                    ${item.question}<span class="icon"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                  </button>
                </h3>
                <div id="${item.id}" class="accordion-collapse collapse ${item.show}" aria-labelledby="${item.id}" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>${item.answer}</p>
                  </div>
                </div>
              </div>
            `;
            faqBox.insertAdjacentHTML('beforeend', html);
          });
        } else {
          // Se não houver perguntas correspondentes, exibe uma mensagem de aviso
          const html = `
            <div class="accordion-item faq-bg wow fadeup-animation">
              <h3 class="accordion-header h3-title">
                <button class="accordion-button faq-btn" type="button">
                  Nenhuma pergunta correspondente encontrada
                </button>
              </h3>
            </div>
          `;
          faqBox.innerHTML = html
          <!-- Formulário de contato -->
          <form id="contact-form">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" placeholder="Nome" required>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input type="email" name="email" class="form-control" placeholder="Email" required>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <input type="tel" name="phone" class="form-control" placeholder="Telefone" required>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <textarea name="message" class="form-control" placeholder="Mensagem" required></textarea>
                </div>
              </div>
              <div class="col-lg-12 text-center">
                <button type="submit" class="btn btn-primary">Enviar mensagem</button>
              </div>
            </div>
          </form>
          // Adiciona um listener para o formulário de contato
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const templateParams = {
    from_name: formData.get('name'),
    from_email: formData.get('email'),
    from_phone: formData.get('phone'),
    message_html: formData.get('message'),
  };
  emailjs.send('service_8uyp8mr', 'template_gx7v5p8', templateParams)
    .then(() => {
      alert('Mensagem enviada com sucesso!');
    })
    .catch(error => {
      alert(`Houve um erro ao enviar a mensagem: ${error}`);
    });
  contactForm.reset();
});
          