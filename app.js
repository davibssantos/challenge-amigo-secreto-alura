let listaNomeDosAmigos = [];

function adicionarAmigo(){
    let nomeParaInserir = document.querySelector('input').value;

    if (nomeParaInserir == '') {
        alert('O campo está vazio, digite um nome.')
    } else {
    listaNomeDosAmigos.push(nomeParaInserir);
    let campoListaAmigos = document.getElementById('listaAmigos');
    campoListaAmigos.textContent = listaNomeDosAmigos;
    limparCampo();
    }
}

function limparCampo(){
    nomeParaInserir = document.querySelector('input');
    nomeParaInserir.value = '';
}

function sortearAmigo(){
    nomeSorteado = listaNomeDosAmigos[Math.floor(Math.random() * listaNomeDosAmigos.length)];
    let mostrarResultado = document.getElementById('resultado');
    mostrarResultado.textContent = nomeSorteado;
}