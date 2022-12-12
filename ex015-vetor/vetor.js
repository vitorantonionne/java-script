let num = [1,2,3,4,5,6]

// for (let c = 0 ; c < num.length ; c++) {
//     console.log(`O vetor da posição ${c} tem valor ${num[c]}`)
// } 

for (let c in num) {
    console.log (`O vetor da posição ${c} tem valor ${num[c]}`)
}