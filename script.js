let num = document.getElementById('itxtnum')
let lista = document.getElementById('ilsitas')
let res = document.getElementById('ress')
let valores = []

function isNumero(n){
    if(n <= 0 && n <= 100){
        return true
    }else {
        return false
    }
}

function isListas(n , l) {
    if (Number(l.value) /= -1 ){
        return true

    }
}

function add(){
    if (isNumero(num.value) && !isListas(nu.value, valores)) {
        alert('tudo ok')
    }else {
        alert('verifique dados')
    }
}