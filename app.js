// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = ''; // Limpa o campo de entrada

    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Embaralha a lista de amigos
    const amigosEmbaralhados = amigos.slice().sort(() => Math.random() - 0.5);

    // Cria pares de amigos secretos
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigoAtual = amigosEmbaralhados[i];
        const amigoSorteado = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];

        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigoAtual} ➔ ${amigoSorteado}`;
        resultado.appendChild(itemResultado);
    }
}