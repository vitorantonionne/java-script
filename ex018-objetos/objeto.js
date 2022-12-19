let exemplo = { nome: 'vitor' ,altura: 1.82 ,sexo: 'masculino' , peso: 84 , engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
exemplo.engordar(4)
console.log (`${exemplo.nome} pesa ${exemplo.peso}`)