let num = [10,7,8]
num.push(9)
num[4] = 6

console.log(num)
console.log (num.sort(function(a,b){return a-b}))
console.log (`Valor do nossos vetores ${num.length}`)
console.log (`Qual o primeiro valor do vetor ${num[0]}`)

let pos = num.indexOf(10)
if (pos == -1) {
    console.log ('NUMERO INEXISTENTE')
}else{
    console.log (`O valor está na posição ${pos}`)
}