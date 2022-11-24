let botao = document.getElementById('botao')
let resultado = document.getElementById('resultado')
let numero = document.getElementById('numero');
let res = document.getElementById('res');



function adicao() {
    resultado.innerHTML = ''
    let n = Number(numero.value)
    if (n > 0) {

        resultado.innerHTML += 'Adição'
        resultado.innerHTML += '<br>'
        resultado.innerHTML += '<br>'
        for (let i = 0; i <= 10; i += 1) {

            resultado.style.textAlign = 'left'
            resultado.innerHTML += `${n} + ${i} = ${n + i}`
            resultado.innerHTML += '<br>'
            if (i >= 10) {
                resultado.innerHTML += '<br>'
                resultado.innerHTML += '<br>'
            }

        }
    } else { alert("Número inválido. por favor digite novamente!") }

}

function subtracao() {
    resultado.innerHTML = ''
    let n = Number(numero.value)
    if (n > 0) {
        resultado.innerHTML += 'Subtração'
        resultado.innerHTML += '<br>'
        resultado.innerHTML += '<br>'


        for (let i = 0; i <= 10; i += 1) {
            resultado.style.textAlign = 'left'
            resultado.innerHTML += `${n} - ${i} = ${n - i}`
            resultado.innerHTML += '<br>'
            if (i >= 10) {
                resultado.innerHTML += '<br>'
                resultado.innerHTML += '<br>'
            }
        }
    } else { alert("Número inválido. por favor digite novamente!") }


}

function multiplicacao() {
    resultado.innerHTML = ''
    let n = Number(numero.value)
    if (n > 0) {
        resultado.innerHTML += 'Multiplicação'
        resultado.innerHTML += '<br>'
        resultado.innerHTML += '<br>'


        for (let i = 0; i <= 10; i += 1) {
            resultado.style.textAlign = 'left'
            resultado.innerHTML += `${n} X ${i} = ${n * i}`
            resultado.innerHTML += '<br>'
            if (i >= 10) {
                resultado.innerHTML += '<br>'
                resultado.innerHTML += '<br>'
            }
        }
    } else { alert("Número inválido. por favor digite novamente!") }


}

function divisao() {

    resultado.innerHTML = ''
    let n = Number(numero.value)
    if (n > 0) {
        resultado.innerHTML += 'Divisão'
        resultado.innerHTML += '<br>'
        resultado.innerHTML += '<br>'


        for (let i = 1; i <= 10; i += 1) {
            resultado.style.textAlign = 'left'
            let res = n / i
            resultado.innerHTML += `${n} / ${i} =  ${res.toFixed(1)}`
            resultado.innerHTML += '<br>'
            if (i >= 10) {
                resultado.innerHTML += '<br>'
                resultado.innerHTML += '<br>'
            }
        }
    } else {
        alert("Número inválido. por favor digite novamente!")
    }

}