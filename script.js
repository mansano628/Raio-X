// ==========================================
// 1. BANCO DE DADOS FINAL (10 Livros - Domínio Público)
// ==========================================
const booksDatabase = [
    {
        id: 1,
        titulo: "Vidas Secas",
        autor: "Graciliano Ramos",
        ano: "1938",
        tipo: "Romance",
        categoria: "Literatura Clássica",
        sinopse: "Imagina atravessar um deserto sem água e sem saber o que vai acontecer amanhã. Essa é a vida do Fabiano e da Baleia, a cachorrinha mais leal do mundo, lutando para sobreviver no sertão.",
        gancho: "Uma história real de sobrevivência. A relação de lealdade entre a família e a cachorrinha Baleia vai emocionar você.",
        tags: ["Seca", "Sobrevivência", "Animais", "Aventura", "Esperança"]
    },
    {
        id: 2,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        ano: "1899",
        tipo: "Romance",
        categoria: "Literatura Clássica",
        sinopse: "Bentinho e Capitu eram melhores amigos e apaixonados. Mas ao crescerem, Bentinho fica obcecado achando que ela o traiu com seu melhor amigo. Será traição mesmo ou loucura da cabeça dele?",
        gancho: "É o maior mistério e a maior 'fofoca' da literatura brasileira! Leia, investigue as pistas e tire sua própria conclusão.",
        tags: ["Mistério", "Romance", "Amizade", "Ciúme", "Investigação"]
    },
    {
        id: 3,
        titulo: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        ano: "1881",
        tipo: "Romance",
        categoria: "Literatura Clássica",
        sinopse: "Brás Cubas morreu. Mas, em vez de descansar, ele virou um 'fantasma escritor' para contar todas as fofocas, micos e erros da sua vida, sem filtro nenhum!",
        gancho: "É muito irônico e engraçado. Como ele já está morto, não tem vergonha de falar mal de ninguém (nem dele mesmo).",
        tags: ["Humor", "Ironia", "Fantasma", "Sociedade", "Biografia"]
    },
    {
        id: 4,
        titulo: "A Origem das Espécies",
        autor: "Charles Darwin",
        ano: "1859",
        tipo: "Científico",
        categoria: "Ciências e Natureza",
        sinopse: "Como chegamos até aqui? Darwin viajou o mundo para descobrir que, na natureza, a vida é um grande jogo: quem se adapta melhor aos desafios, vence e evolui!",
        gancho: "Entenda as regras do 'jogo da vida' e descubra os maiores segredos por trás dos animais e da nossa espécie.",
        tags: ["Evolução", "Animais", "Sobrevivência", "Ciência", "Natureza"]        
    },
    {
        id: 5,
        titulo: "A Moreninha",
        autor: "Joaquim Manuel de Macedo",
        ano: "1844",
        tipo: "Romance",
        categoria: "Literatura Clássica",
        sinopse: "Quatro amigos universitários fazem uma aposta em um feriado. O que eles não esperavam era que o jovem que não acreditava no amor se envolvesse num grande mistério do passado com a jovem Carolina.",
        gancho: "Um clássico leve e divertido! Mergulhe em uma aposta entre amigos que se transforma em um romance cheio de surpresas.",
        tags: ["Romance", "Aposta", "Amizade", "Mistério", "Juventude"]
    },
    {
        id: 6,
        titulo: "Triste Fim de Policarpo Quaresma",
        autor: "Lima Barreto",
        ano: "1915",
        tipo: "Romance",
        categoria: "Literatura Clássica",
        sinopse: "A história acompanha Policarpo, um homem tão apaixonado pelo Brasil que propõe trocar a língua oficial por tupi e se mete em confusões hilárias e trágicas com o governo.",
        gancho: "Uma sátira brilhante! A história vai te fazer rir e refletir sobre o patriotismo cego e as críticas sociais que continuam atuais na política brasileira.",
        tags: ["Patriotismo", "Crítica Social", "Humor", "Brasil", "História"]
    },
    {
        id: 7,
        titulo: "A Carta de Descobrimento",
        autor: "Pero Vaz de Caminha",
        ano: "1500",
        tipo: "Documento",
        categoria: "História do Brasil",
        sinopse: "O 'diário de bordo' do primeiro europeu a pisar no Brasil. Ele escreveu para o rei detalhando as praias gigantescas e o primeiro choque cultural com os indígenas.",
        gancho: "É como ler o diário de um explorador vendo o Brasil pela primeiríssima vez, muito antes de virar um país.",
        tags: ["Descobrimento", "Diário", "Indígenas", "Exploração", "Brasil"]
    },
    {
        id: 8,
        titulo: "Alegoria da Caverna",
        autor: "Platão",
        ano: "~380 a.C.",
        tipo: "Filosófico",
        categoria: "Filosofia e Cidadania",
        sinopse: "Imagina viver preso numa caverna achando que as sombras na parede são a realidade, até você conseguir sair e ver a luz do sol. Você voltaria para avisar os outros?",
        gancho: "Vai bugar a sua mente! Uma reflexão perfeita sobre o perigo das fake news e das 'bolhas' das redes sociais.",
        tags: ["Verdade", "Internet", "Ilusão", "Reflexão", "Fake News"]
    },
    {
        id: 9,
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        ano: "1818",
        tipo: "Ficção Científica",
        categoria: "Literatura Clássica",
        sinopse: "Um jovem cientista consegue dar vida a uma criatura feita em laboratório. Assustado com o monstro, ele o abandona, desencadeando uma história assustadora sobre busca por respostas e vingança.",
        gancho: "Muito mais que um monstro! Um suspense assustador que faz a gente pensar sobre bullying, solidão, aceitação e até onde a ciência pode chegar.",
        tags: ["Ficção Científica", "Terror", "Solidão", "Ciência", "Rejeição"]
    },
    {
        id: 10,
        titulo: "A Arte da Guerra",
        autor: "Sun Tzu",
        ano: "~500 a.C.",
        tipo: "Estratégia",
        categoria: "Filosofia e Cidadania",
        sinopse: "Um antigo manual que ensina que a melhor vitória é aquela conquistada usando a inteligência e não a força. Traz lições incríveis sobre planejamento, autoconhecimento e adaptação.",
        gancho: "Aprenda a vencer sem precisar lutar. Táticas milenares adaptadas para te ajudar a ter foco, inteligência emocional e a superar os desafios da escola e da vida.",
        tags: ["Estratégia", "Resolução de Conflitos", "Resiliência", "Foco", "Liderança"]
    },
    {
        id: 11,
        titulo: "A Ilíada",
        autor: "Homero",
        ano: "~700 a.C.",
        tipo: "Poema Épico / Epopeia",
        categoria: "Literatura Clássica / Literatura Estrangeira.",
        sinopse: "A história foca em algumas semanas do último ano da Guerra de Troia, destacando a fúria do guerreiro Aquiles após ser humilhado pelo rei Agamêmnon, e como o orgulho cego dos poderosos resulta em tragédia para os soldados comuns.",
        gancho: "O texto original tem um vocabulário complexo e uma narrativa grandiosa. A adaptação foca em mostrar como o orgulho e a arrogância são destrutivos, ensinando o jovem a usar a educação e o pensamento crítico como escudo para não ser manipulado pelo sistema ou por líderes que buscam apenas o próprio benefício.",
        tags: ["Guerra", "Orgulho", "Poder", "Sobrevivência", "Tragédia", "Empatia"]
    },
    {
        id: 12,
        titulo: "A Odisseia",
        autor: "Homero",
        ano: "~800 a.C.",
        tipo: "Estratégia",
        categoria: "Literatura Clássica / Literatura Estrangeira.",
        sinopse: "Narra a longa e perigosa jornada de retorno do rei Odisseu (Ulisses) para sua esposa e filho em Ítaca, após a Guerra de Troia. Ele enfrenta monstros, bruxas e a fúria dos deuses usando a sua inteligência e astúcia no lugar da força bruta.",
        gancho: "A adaptação quebra a barreira da linguagem antiga para entregar um verdadeiro manual de sobrevivência. O foco é ensinar que a inteligência, o planejamento e a resiliência são as maiores armas que um jovem pode ter para vencer os obstáculos do mundo e retornar em segurança para casa.",
        tags: ["Aventura", "Inteligência", "Resiliência", "Estratégia", "Família", "Superação"]
    }
];

// ==========================================
// 2. CONFIGURAÇÕES E ESTADO DO APLICATIVO
// ==========================================
const categories = ["Todos", "Ciências e Natureza", "Filosofia e Cidadania", "História do Brasil", "Literatura Clássica"];

let currentCategory = "Todos";
let currentSearchTerm = "";

// Elementos do HTML capturados pelo JS
const bookListElement = document.getElementById("book-list");
const filtersContainer = document.getElementById("filters-container");
const searchInput = document.getElementById("search-input");
const modal = document.getElementById('book-modal');
const modalBody = document.getElementById('modal-body');

// ==========================================
// 3. FUNÇÕES DE RENDERIZAÇÃO (Filtros e Tela Inicial)
// ==========================================

function renderFilters() {
    filtersContainer.innerHTML = ""; 

    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category;
        btn.className = `filter-pill ${category === currentCategory ? 'active' : 'inactive'}`;
        
        btn.addEventListener("click", () => {
            currentCategory = category;
            renderFilters(); 
            renderBooks();   
        });

        filtersContainer.appendChild(btn);
    });
}

function renderBooks() {
    bookListElement.innerHTML = ""; 

    const filteredBooks = booksDatabase.filter(book => {
        const matchCategory = currentCategory === "Todos" || book.categoria === currentCategory;
        
        const term = currentSearchTerm.toLowerCase();
        const matchSearch = 
            book.titulo.toLowerCase().includes(term) || 
            book.autor.toLowerCase().includes(term) ||
            book.tags.some(tag => tag.toLowerCase().includes(term));

        return matchCategory && matchSearch;
    });

    if (filteredBooks.length === 0) {
        bookListElement.innerHTML = `<p style="text-align: center; color: var(--text-gray); margin-top: 20px;">Nenhum livro encontrado para esta busca.</p>`;
        return;
    }

    filteredBooks.forEach(book => {
        const tagsHTML = book.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('');

        const cardHTML = `
            <div class="card">
                <div class="card-header">${book.tipo} • ${book.categoria}</div>
                <h2 class="card-title">${book.titulo}</h2>
                <div class="card-subtitle">${book.autor} • ${book.ano}</div>
                
                <p class="card-synopsis">${book.sinopse}</p>
                
                <div class="card-tags mb-3" style="margin-bottom: 15px;">
                    ${tagsHTML}
                </div>
                
                <!-- Botão Ver Mais (Abre o Modal) -->
                <button class="read-btn" onclick="abrirResumo(${book.id})">
                    <i class="fa-solid fa-plus"></i> Ver mais
                </button>
            </div>
        `;
        
        bookListElement.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// ==========================================
// 4. FUNÇÕES DO MODAL (A Janela Flutuante)
// ==========================================

function abrirResumo(idDoLivro) {
    const livroEscolhido = booksDatabase.find(book => book.id === idDoLivro);
    
    // Injeta os dados dentro da janela modal
    modalBody.innerHTML = `
        <div class="card-header">${livroEscolhido.tipo} • ${livroEscolhido.categoria}</div>
        <h2 class="card-title" style="font-size: 24px; margin-bottom: 5px;">${livroEscolhido.titulo}</h2>
        <div class="card-subtitle" style="margin-bottom: 20px;">${livroEscolhido.autor} • ${livroEscolhido.ano}</div>
        
        <p class="card-synopsis" style="font-size: 15px; margin-bottom: 20px;">
            ${livroEscolhido.sinopse}
        </p>
        
        <div class="card-hook" style="font-size: 14px; margin-bottom: 25px;">
            <strong>Por que ler?</strong> <br> ${livroEscolhido.gancho}
        </div>

        <!-- Botão para redirecionar à tela de leitura profunda -->
        <button class="read-btn full-read-btn" onclick="window.location.href='leitura.html?id=${livroEscolhido.id}'">
            <i class="fa-solid fa-book-open"></i> Ler Adaptação Completa
        </button>
    `;

    modal.classList.add('active');
}

function fecharResumo() {
    modal.classList.remove('active');
}

// ==========================================
// 5. EVENTOS E INICIALIZAÇÃO
// ==========================================

searchInput.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value;
    renderBooks();
});

function initApp() {
    renderFilters();
    renderBooks();
}

// Inicialização
initApp();