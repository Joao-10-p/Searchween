// ====== LISTA DE CONFIRMADOS ======
// Coloque aqui SOMENTE quem já pagou, um nome por linha entre aspas simples.
// Toda linha termina com vírgula.
const confirmados = [
    'Alice Piffer',
'Alicia Piaia',
'Amanda Pollo',
'Ana Julia Baldim',
'Ana Possi',
'Arthur Benedetti',
'Arthur Pitarello',
'Arthur Politti',
'Benatti',
'Benjamim',
'Bia Brianti',
'Bia Ramalho',
'Bianca Pagotto',
'Brunna Maia',
'Bruno D',
'Bruno P',
'Cae Terin',
'Carol Alves',
'Cauã Grou',
'Christian',
'Clara Accorsi',
'Clara Zeni',
'Coutinho',
'Dudu Beira',
'Emanuela Zenezini',
'Enzo Darioli',
'Enzo Marinelli',
'Fachini',
'Felipe Diniz Macedonho',
'Ferelli',
'Fernando',
'Fran',
'Gabi Petrolli',
'Gabrielly Teixeira',
'Gi Carmim',
'Giuseppe',
'Guilherme Vieira',
'Gustavo Barassa',
'Heitor Antonelli',
'Heitor Nora',
'Helena Branquinho',
'Helena Leopoldino',
'Helena Manzato',
'Helena Marcatto',
'Helena Nigra',
'Helena Politti',
'Helena Prando',
'Helo Baldo',
'Helo Manzato',
'Helo Marchi',
'Heloísa Sibinel',
'Henrique',
'Henrique Bender',
'Heto',
'Iago Godoi',
'Ícaro Galvez',
'Inacio Ramos',
'Ingrid',
'Isabela Marchiori',
'Isadora Lima',
'Israel Grou',
'Izadora Campos',
'João Bertolla',
'João Gabriel (Dk)',
'João Rossini',
'João Vallone',
'Joaquim Andre',
'Joaquim Job',
'Julia Pupo',
'Júlia Souza',
'Juliane Lei',
'Keke Froes',
'Kevin Stringhetta',
'Laila',
'Laís Mozer',
'Lara',
'Lara Reis',
'Larissa Pintor',
'Léo Cresta',
'Lella',
'Leonardo Guersoni',
'Letícia Marchi',
'Letícia Moraes',
'Lissa',
'Livia Poppi',
'Lorena Consoli',
'Lucas Pedroso',
'Lucca Machado',
'Luiza Marchi',
'Ma Urbano',
'Malu Pupo',
'Manu Mahana',
'Manu Martins',
'Manuaf',
'Maria Eduarda Barassa',
'Maria Eduarda Marchi',
'Maria Eduarda Urbano',
'Maria Escura',
'Maria Tereza Oragio de Santi',
'Marina Citrangulo',
'Mateus Caleffi',
'Matheus Defendi',
'Mei',
'Miguel Camargo',
'Miguel Macedo',
'Murilo',
'Nicholas',
'Nicollas Arantes',
'Panagio',
'Pedro Cardoso',
'Pedro Dematte',
'Pedro Fuzaro',
'Pedro Souza',
'Pedro Tosetto',
'Ph',
'Piffer',
'Pyetra Pagan',
'Rafa Martins',
'Rafaella Gianini',
'Raphaela Kassouf',
'Samuca',
'Stella Furtado',
'Tellini',
'Tete',
'Theu Garcia',
'Thomas Marchi',
'Vini Perez',
'Vitor Cresta',
'Vitor Putini',
'Vitória Biachi',
'Yasmin Marcatto',
'Zoca',
'Yasmin Lima',
'Vinicius Lopes',
'Bruno Vincenzo',
'Vinicius pereira',
'Antonio de Noronha',
'Bia la Motta',
];

// ====== ELEMENTOS DA PÁGINA ======
const form = document.getElementById('form-busca');
const inputNome = document.getElementById('name');
const resultado = document.getElementById('resultado');
const btnEfeito = document.getElementById('btn-efeito');
const btnTema = document.getElementById('btn-tema');
const iconeTopo = document.getElementById('icone-topo');

// ====== PREFERÊNCIAS (lembradas no navegador) ======
let efeitosLigados = true;
let temaSangue = false;

function lerPreferencia(chave) {
    try { return localStorage.getItem(chave); } catch (e) { return null; }
}
function salvarPreferencia(chave, valor) {
    try { localStorage.setItem(chave, valor); } catch (e) { /* sem problema */ }
}

// ====== TEXTOS ======
function normalizar(texto) {
    // Remove acentos e maiúsculas: "JOAO" encontra "João"
    return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

function iconeTema() {
    return temaSangue ? '🩸' : '🎃';
}

// ====== TEMA (abóbora / sangue) ======
function aplicarTema() {
    document.body.dataset.tema = temaSangue ? 'sangue' : 'abobora';
    iconeTopo.textContent = temaSangue ? '💀' : '🎃';
    btnTema.textContent = temaSangue ? '🎃 Tema abóbora' : '🩸 Tema sangue';
    btnTema.setAttribute('aria-pressed', String(temaSangue));
}

btnTema.addEventListener('click', () => {
    temaSangue = !temaSangue;
    salvarPreferencia('searchween-tema', temaSangue ? 'sangue' : 'abobora');
    aplicarTema();
});

// ====== EFEITOS (confete laranja / caveirinhas) ======
function aplicarEfeito() {
    btnEfeito.textContent = efeitosLigados ? '✨ Efeitos: ligados' : '✨ Efeitos: desligados';
    btnEfeito.setAttribute('aria-pressed', String(efeitosLigados));
}

btnEfeito.addEventListener('click', () => {
    efeitosLigados = !efeitosLigados;
    salvarPreferencia('searchween-efeitos', efeitosLigados ? 'ligados' : 'desligados');
    aplicarEfeito();
    if (efeitosLigados) chover(); // mostra o efeito para a pessoa ver que voltou
});

const coresConfete = ['#ff7a18', '#ffa31a', '#ff9a3c', '#ffb347', '#e8590c'];
const sorteio = (min, max) => min + Math.random() * (max - min);

function chover() {
    if (!efeitosLigados) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const chuva = document.createElement('div');
    chuva.className = 'chuva';
    chuva.setAttribute('aria-hidden', 'true');

    const quantidade = temaSangue ? 26 : 45; // caveiras são maiores, então menos peças
    let maiorDuracao = 0;

    for (let i = 0; i < quantidade; i++) {
        const peca = document.createElement('span');
        const duracao = sorteio(2.2, 4.2);
        const atraso = sorteio(0, 1.2);
        maiorDuracao = Math.max(maiorDuracao, duracao + atraso);

        if (temaSangue) {
            peca.className = 'caveira';
            peca.textContent = '💀';
            peca.style.fontSize = `${sorteio(20, 34)}px`;
        } else {
            peca.className = 'confete';
            peca.style.width = `${sorteio(6, 11)}px`;
            peca.style.height = `${sorteio(10, 18)}px`;
            peca.style.background = coresConfete[Math.floor(Math.random() * coresConfete.length)];
        }

        peca.style.left = `${sorteio(0, 100)}%`;
        peca.style.animationDuration = `${duracao}s`;
        peca.style.animationDelay = `${atraso}s`;
        peca.style.setProperty('--deriva', `${sorteio(-80, 80)}px`);
        peca.style.setProperty('--giro', `${sorteio(-540, 540)}deg`);
        chuva.appendChild(peca);
    }

    document.body.appendChild(chuva);
    setTimeout(() => chuva.remove(), (maiorDuracao + 0.3) * 1000);
}

// ====== EFEITO DE DIGITAÇÃO ======
const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let digitacaoAtual = 0; // se uma nova pesquisa começar, a digitação antiga para

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function digitar(elemento, texto, id, velocidade) {
    if (reduzirMovimento) {
        elemento.textContent = texto;
        return true;
    }
    elemento.classList.add('digitando');
    for (const letra of texto) {
        if (id !== digitacaoAtual) return false;
        elemento.textContent += letra;
        await esperar(velocidade);
    }
    elemento.classList.remove('digitando');
    return true;
}

// Mostra os cards um por vez, "escrevendo" o texto
async function mostrarCards(lista) {
    const id = ++digitacaoAtual;
    resultado.innerHTML = '';
    resultado.setAttribute('aria-busy', 'true');

    for (const item of lista) {
        const card = document.createElement('div');
        card.className = `resultado ${item.classe}`;
        const titulo = document.createElement('strong');
        const detalhe = document.createElement('span');
        card.append(titulo, detalhe);
        resultado.appendChild(card);

        if (!(await digitar(titulo, item.titulo, id, 45))) return;
        if (!(await digitar(detalhe, item.detalhe, id, 20))) return;
    }
    resultado.setAttribute('aria-busy', 'false');
}

// ====== PESQUISA ======
form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const busca = normalizar(inputNome.value);
    if (!busca) return;

    const encontrados = confirmados
        .filter((nome) => normalizar(nome).includes(busca))
        .slice(0, 7);

    if (encontrados.length === 0) {
        mostrarCards([{
            classe: 'sem-resultado',
            titulo: '💀 Nome não encontrado',
            detalhe: 'Nem os fantasmas te encontraram... fale com o organizador!',
        }]);
        return;
    }

    chover();
    mostrarCards(encontrados.map((nome) => ({
        classe: 'confirmado',
        titulo: `${iconeTema()} ${nome}`,
        detalhe: 'Confirmado!',
    })));
});

// ====== INÍCIO: recupera o que a pessoa escolheu da última vez ======
temaSangue = lerPreferencia('searchween-tema') === 'sangue';
efeitosLigados = lerPreferencia('searchween-efeitos') !== 'desligados';
aplicarTema();
aplicarEfeito();
