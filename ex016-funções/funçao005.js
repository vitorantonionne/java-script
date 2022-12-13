// conceito de RECURSIVIDADE = QUANDO A FUNÇÃO CHAMA ELA MESMA

function fatorial(n) {
    if (n == 1){
        return 1
    }else {
        return n * fatorial(n-1)
        // 5-1=4
        // 5-2=3
        // 5-3=2
        // 5-4=1
    }
}

console.log (fatorial(5))