const faqBox = document.querySelector('.faq-box');
const form = document.querySelector('#faq-form');
const searchInput = document.querySelector('#faq-search-input');

const renderFAQ = (data) => {
  faqBox.innerHTML = '';
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
};

// Busca as perguntas e respostas do FAQ em um arquivo JSON hospedado no GitHub
fetch('assets/js/perguntas-respostas.json')
  .then(response => response.json())
  .then(data => {
    // Preenche as perguntas e respostas no HTML com base nos dados do arquivo JSON
    renderFAQ(data);

    // Adiciona um listener para o formulário de busca
    form.addEventListener('submit', event => {
      event.preventDefault();
      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm !== '') {
        const results = data.filter(item => item.question.toLowerCase().includes(searchTerm));
        if (results.length > 0) {
          renderFAQ(results);
        } else {
          // Se não houver perguntas correspondentes, exibe uma mensagem de aviso
          const html = `<div class="accordion-item faq-bg wow fadeup-animation"><h3 class="accordion-header h3-title"><button class="accordion-button faq-btn" type="button">Nenhuma pergunta correspondente encontrada</button></h3></div>`;
          faqBox.innerHTML = html;
        }
      } else {
        // Caso a busca esteja vazia, exibe todas as perguntas e respostas
        renderFAQ(data);
      }
    });
  })
  .catch(error => {
    console.log(`Ocorreu um erro na requisição: ${error}`);
  });
