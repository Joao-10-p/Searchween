// ====== LISTA DE CONFIRMADOS ======
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

// Remove acentos e maiúsculas: "JOAO" encontra "João"
function normalizar(texto) {
    return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
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

    const encontrados = confirmados
        .filter((nome) => normalizar(nome).includes(busca))
        .slice(0, 5);

    if (encontrados.length === 0) {
        resultado.innerHTML = mostrar(
            'sem-resultado',
            '💀 Nome não encontrado',
            'Esse nome não consta na lista de confirmados. Confirme se o nome esta certo.'
        );
        return;
    }

    resultado.innerHTML = encontrados.map((nome) =>
        mostrar('confirmado', `🎃 ${escapar(nome)}`, 'Confirmado!')
    ).join('');
});
