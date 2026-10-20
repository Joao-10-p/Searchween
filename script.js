// ====== LISTA DE CONVIDADOS ======
// Edite aqui: pago: true = confirmado | pago: false = ainda não pagou
const convidados = [
    { nome: 'João Silva',   pago: true },
    { nome: 'Maria Souza',  pago: true },
    { nome: 'Pedro Santos', pago: false },
    { nome: 'Ana Oliveira', pago: true },
];

// ====== ELEMENTOS DA PÁGINA ======
const form = document.getElementById('form-busca');
const inputNome = document.getElementById('name');
const resultado = document.getElementById('resultado');

// Remove acentos e maiúsculas: "JOAO" encontra "João"
function normalizar(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

// Evita que texto digitado vire HTML
function escapar(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

function mostrar(classe, titulo, detalhe = '') {
    return `<div class="resultado ${classe}">
                <strong>${titulo}</strong>
                ${detalhe ? `<span>${detalhe}</span>` : ''}
            </div>`;
}

// ====== PESQUISA ======
form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const busca = normalizar(inputNome.value);
    if (!busca) return;

    const encontrados = convidados
        .filter((c) => normalizar(c.nome).includes(busca))
        .slice(0, 5);

    if (encontrados.length === 0) {
        resultado.innerHTML = mostrar(
            'nao-encontrado',
            '💀 Nome não encontrado',
            'Confira a escrita ou fale com o organizador.'
        );
        return;
    }

    resultado.innerHTML = encontrados.map((c) =>
        c.pago
            ? mostrar('confirmado', `🎃 ${escapar(c.nome)}`, 'Confirmado! Pagamento realizado.')
            : mostrar('pendente', `⏳ ${escapar(c.nome)}`, 'Está na lista, mas o pagamento ainda não foi confirmado.')
    ).join('');
});