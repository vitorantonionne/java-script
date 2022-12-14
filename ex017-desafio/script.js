let num = document.getElementById('itxtnum')
let lista = document.getElementById('ilista')
let res = document.querySelector('div#ress')
let valores = []


function isNumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Numero ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert ('Numero invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalize() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    }else {
        res.innerHTML = ''

        let tot = valores.length
        res.innerHTML = `<p>Numero total de elementos da lista é ${tot}</p>`

        // valores.sort(function(a,b){return b-a})
        // let maior = valores[0]
        // res.innerHTML += `O maior valor informado foi ${maior}<br>`

        // valores.sort(function(a,b){return a-b})
        // let menor = valores[0]
        // res.innerHTML += `O menor valor informado foi ${menor}`

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos]  > maior){
                maior = valores[pos]
            }
            if (valores[pos] < maior){
                menor = valores[pos]
            }
        }
        media = soma/tot

        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A somatorioa dos valores é ${soma}</p>`
        
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}