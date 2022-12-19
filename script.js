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