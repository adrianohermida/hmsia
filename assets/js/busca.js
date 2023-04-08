const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro ao buscar arquivo JSON: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }
  
  const faqBox = document.querySelector('.faq-box');
  const form = document.querySelector('#faq-form');
  const searchInput = document.querySelector('#faq-search-input');
  
  fetchJson('assets/js/perguntas-respostas.json')
    .then(data => {
      // Preenche as perguntas e respostas no HTML com base nos dados do arquivo JSON
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
    })
    .catch(error => {
      console.error(error);
      const html = `<div class="accordion-item faq-bg wow fadeup-animation"><h3 class="accordion-header h3-title"><button class="accordion-button faq-btn" type="button">Erro ao buscar as perguntas e respostas</button></h3></div>`;
      faqBox.innerHTML = html;
    });
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      const results = Array.from(faqBox.children).filter(item => item.textContent.toLowerCase().includes(searchTerm.toLowerCase()));
      if (results.length > 0) {
        faqBox.innerHTML = '';
        results.forEach(item => {
          faqBox.appendChild(item);
        });
      } else {
        const html = `<div class="accordion-item faq-bg wow fadeup-animation"><h3 class="accordion-header h3-title"><button class="accordion-button faq-btn" type="button">Nenhuma pergunta correspondente encontrada</button></h3></div>`;
        faqBox.innerHTML = html;
      }
    } else {
      faqBox.innerHTML = '';
      fetchJson('assets/js/perguntas-respostas.json')
        .then(data => {
          data.forEach(item => {
            const html = `
              <div class="accordion-item faq-bg wow fadeup-animation" data-wow-delay="${item.delay}">
                <h3 class="accordion-header h3-title" id="${item.id}">
                  <button class="accordion-button faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#${item.target}" aria-expanded="${item.expanded}" aria-controls="${item.controls}">
                    ${item.question}<span class="icon"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                  </button>
                </h3>
                <div id="${item.id}" class="accordion-collapse collapse ${item.show
  