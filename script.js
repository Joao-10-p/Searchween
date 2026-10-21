// ====== LISTA DE CONVIDADOS ======
// Edite aqui: pago: true = confirmado | pago: false = ainda não pagou
const convidados = [
    { nome: 'Alice Piffer', pago: false },
    { nome: 'Alicia Piaia', pago: true },
    { nome: 'Anderson Vitor', pago: false },
    { nome: 'Antonio Noronha', pago: false },
    { nome: 'Arthur Pitarello', pago: false },
    { nome: 'Benjamim', pago: true },
    { nome: 'Bia Ramalho', pago: false },
    { nome: 'Bianca Pagotto', pago: true },
    { nome: 'Brunna Maia', pago: false },
    { nome: 'Bruno D', pago: false },
    { nome: 'Cae Terin', pago: true },
    { nome: 'Caio Carmim', pago: false },
    { nome: 'Carol Alves', pago: true },
    { nome: 'Cauã Grou', pago: true },
    { nome: 'Christian', pago: true },
    { nome: 'Clara Accorsi', pago: true },
    { nome: 'Clara Zeni', pago: true },
    { nome: 'Coutinho', pago: true },
    { nome: 'Dudu Beira', pago: true },
    { nome: 'Emanuela Zenezini', pago: true },
    { nome: 'Enzo Darioli', pago: true },
    { nome: 'Enzo Marinelli', pago: true },
    { nome: 'Felipe Diniz Macedonho', pago: true },
    { nome: 'Fernando', pago: true },
    { nome: 'Gabi Petrolli', pago: true },
    { nome: 'Gabrielly Teixeira', pago: false },
    { nome: 'Gi Carmim', pago: true },
    { nome: 'Gui', pago: false },
    { nome: 'Guilherme Vieira', pago: true },
    { nome: 'Gustavo Barassa', pago: true },
    { nome: 'Heitor Antonelli', pago: true },
    { nome: 'Heitor Benatti', pago: false },
    { nome: 'Heitor Nora', pago: true },
    { nome: 'Helena Branquinho', pago: true },
    { nome: 'Helena Leopoldino', pago: true },
    { nome: 'Helena Manzato', pago: true },
    { nome: 'Helena Marcatto', pago: true },
    { nome: 'Helena Nigra', pago: true },
    { nome: 'Helena Politti', pago: true },
    { nome: 'Helena Prando', pago: true },
    { nome: 'Helo Manzato', pago: true },
    { nome: 'Helo Marchi', pago: true },
    { nome: 'Henrique', pago: true },
    { nome: 'Heto', pago: false },
    { nome: 'Iago Godoi', pago: true },
    { nome: 'Ícaro Galvez', pago: true },
    { nome: 'Inacio Ramos', pago: true },
    { nome: 'Isabela Marchiori', pago: true },
    { nome: 'Isadora Lima', pago: true },
    { nome: 'Israel Grou', pago: true },
    { nome: 'Izadora Campos', pago: true },
    { nome: 'João Bertolla', pago: true },
    { nome: 'João Rossini', pago: true },
    { nome: 'João Vallone', pago: true },
    { nome: 'Joaquim Job', pago: true },
    { nome: 'Julia Pupo', pago: true },
    { nome: 'Juliane Lei', pago: true },
    { nome: 'Kevin Stringhetta', pago: false },
    { nome: 'Laila', pago: true },
    { nome: 'Lara', pago: true },
    { nome: 'Lara Reis', pago: true },
    { nome: 'Lella', pago: true },
    { nome: 'Leonardo Guersoni', pago: true },
    { nome: 'Letícia Marchi', pago: true },
    { nome: 'Letícia Moraes', pago: true },
    { nome: 'Lissa', pago: true },
    { nome: 'Lorena Consoli', pago: true },
    { nome: 'Lucca Machado', pago: true },
    { nome: 'Luiza Marchi', pago: false },
    { nome: 'Malu Pupo', pago: true },
    { nome: 'Manu Mahana', pago: true },
    { nome: 'Manuaf', pago: true },
    { nome: 'Ma Urbano', pago: true },
    { nome: 'Maria Eduarda Urbano', pago: true },
    { nome: 'Maria Escura', pago: true },
    { nome: 'Maria Tereza Oragio de Santi', pago: true },
    { nome: 'Matheus Cavarzan', pago: false },
    { nome: 'Matheus Costa', pago: false },
    { nome: 'Matheus Defendi', pago: true },
    { nome: 'Mateus Caleffi', pago: true },
    { nome: 'Mei', pago: true },
    { nome: 'Miguel Macedo', pago: true },
    { nome: 'Miguel Torres', pago: false },
    { nome: 'Murilo', pago: true },
    { nome: 'Nicollas Arantes', pago: true },
    { nome: 'Panagio', pago: true },
    { nome: 'Pedro Boloix', pago: false },
    { nome: 'Pedro Cardoso', pago: true },
    { nome: 'Pedro Dematte', pago: false },
    { nome: 'Pedro Fuzaro', pago: true },
    { nome: 'Pedro Tosetto', pago: false },
    { nome: 'Piffer', pago: true },
    { nome: 'Pietro Bigode', pago: false },
    { nome: 'Pyetra Pagan', pago: true },
    { nome: 'Raphaela Kassouf', pago: true },
    { nome: 'Samuca', pago: true },
    { nome: 'Samuel de Paula', pago: false },
    { nome: 'Stella Furtado', pago: true },
    { nome: 'Sthefany Melo', pago: false },
    { nome: 'Tellini', pago: true },
    { nome: 'Tete', pago: true },
    { nome: 'Theu Garcia', pago: true },
    { nome: 'Thomas Marchi', pago: true },
    { nome: 'Vinicius Lopes', pago: false },
    { nome: 'Vinícius Pereira', pago: false },
    { nome: 'Vini Perez', pago: true },
    { nome: 'Vitória Biachi', pago: false },
    { nome: 'Vitor Froes', pago: false },
    { nome: 'Vitor Putini', pago: true },
    { nome: 'Yasmim Lima', pago: false },
    { nome: 'Laís mozer', pago: true },
    { nome: 'Yasmin marcatto', pago: true },
    { nome: 'Lucas Pedroso', pago: true },
    { nome: 'Maria Eduarda Marchi', pago: true },
    { nome: 'Maria Eduarda Barassa', pago: true },
    { nome: 'Giuseppe', pago: true },
    { nome: 'Heloísa Sibinel', pago: true },
    { nome: 'Joaquim Andre', pago: true },
    { nome: 'Ana Possi', pago: true },
    { nome: 'Amanda Pollo', pago: true },
    { nome: 'Rafaella Gianini', pago: true },
    { nome: 'Livia poppi', pago: false },
    { nome: 'Marina Citrangulo', pago: false },
    { nome: 'Davi Fernandes', pago: false },
    { nome: 'Arthur Benedetti', pago: true },
    { nome: 'Luar Vilalta', pago: false },
    { nome: 'Ana Julia Baldim', pago: false },
    { nome: 'Nicholas', pago: false },
    { nome: 'Lodetti', pago: false },
    { nome: 'Fachini', pago: true },
    { nome: 'Pedro Neves', pago: false },
    { nome: 'Benatti', pago: true },
    { nome: 'Zoca', pago: true },
    { nome: 'ferelli', pago: false },
    { nome: 'Miguel Camargo', pago: false },
    { nome: 'João Gabriel (Dk)', pago: false },
    { nome: 'Pedro Souza', pago: false },
    { nome: 'Larissa pintor', pago: true },
    { nome: 'Ingrid', pago: true },
    { nome: 'Léo cresta', pago: true },
    { nome: 'Bruno p', pago: true },

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
