let listaNomeDosAmigos = [];

function adicionarAmigo(){
    let nomeParaInserir = document.querySelector('input').value;

    if (nomeParaInserir == '') {
        alert('Por favor, insira um nome.');
    } else {
    listaNomeDosAmigos.push(nomeParaInserir);
    let campoListaAmigos = document.getElementById('listaAmigos');
    campoListaAmigos.innerHTML = listaNomeDosAmigos;
    limparCampo();
    }
}

function limparCampo(){
    nomeParaInserir = document.querySelector('input');
    nomeParaInserir.value = '';
}

function sortearAmigo(){
    if (listaNomeDosAmigos == ''){
        alert('Por favor, insira pelo menos um nome na lista.');
    } else {
        nomeSorteado = listaNomeDosAmigos[Math.floor(Math.random() * listaNomeDosAmigos.length)];
        let mostrarResultado = document.getElementById('resultado');
        mostrarResultado.innerHTML = nomeSorteado;
    }
}
