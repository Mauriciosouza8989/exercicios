let botao = document.getElementById('botao')
let corpo = document.getElementById('corpo')
let resultado = document.getElementById('resultado')
let inicio = document.getElementById('inicio');
let fim = document.getElementById('fim');
let passo = document.getElementById('passo');


function contar() {
    let ini = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Opa, faltam dados!')
    } else if (ini.length == 0 || f.length == 0 || p.length == 0) {
        alert('Opa, faltam dados!')
    } else {
        resultado.style.textAlign = 'left'
        if (ini < f) {
            resultado.innerHTML = 'Contando:'
            if (p == 0) {
                alert('passo inválido. o passo será de 1.')
                p = 1
            }
            for (let i = ini; i <= f; i += p) {
                resultado.innerHTML += ` ${i} \u{1F449}`
            }
        } else if (f < ini) {
            if (p == 0) {
                alert('passo inválido. o passo será de 1.')
                p = 1
            }
            resultado.innerHTML = 'Contando:'
            for (let i = ini; i >= f; i -= p) {
                resultado.innerHTML += `\u{1F449} ${i} `
            }

        }
        resultado.innerHTML += `\u{1F3C1}`

    }


}