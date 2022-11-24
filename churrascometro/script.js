let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');



let resultado = document.getElementById('resultado');

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let quantTotalCerveja = cervejaPP(duracao) * adultos;
    let quantTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<h2>Você precisará de</h2>`
    resultado.innerHTML += `<p>${quantTotalCarne}g de carne.</p>`
    resultado.innerHTML += `<p>${quantTotalCerveja}ml de cerveja.</p>`
    resultado.innerHTML += `<p>${quantTotalBebidas}ml de bebidas.</p>`
}


function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}