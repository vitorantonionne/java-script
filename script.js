let num = document.getElementById('itxtnum')
let lista = document.getElementById('ilista')
let res = document.getElementById('ress')
let valores = []

function isNumero(n){
    if(Number(n) > 0 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function isListas(n , l) {
    if (l.indexOf(Number(n)) != -1 ){
        return true
    }else {
        return false
    }
}

function add(){
    if (isNumero(num.value) && !isListas(num.value, valores)) {
        valores.push(Number(num.value))

        let list = document.createElement('option')
        list.text = `Numero ${num.value} adicionado`
        lista.appendChild(list)
        
           
    }else {
        alert('verifique dados')
    }
    num.value = ''
    num.focus()
}

function finalize() {
    if (valores.length == 0){
        alert('verifique dados')
    }else {
        let total = valores.length
        res.innerHTML = (`<p>Numero total de elementos da lista é ${total}</p>`)

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        let media = soma/total

        
        res.innerHTML += (`<p>O maior valor informado foi ${maior}</p>`)
        res.innerHTML += (`<p>O menor valor informado foi ${menor}</p>`)
        res.innerHTML += (`<p>Soma dos elementos é ${soma}</p>`)
        res.innerHTML += (`A media dos elementos é ${media}`)

        let aara = ''
    }
}