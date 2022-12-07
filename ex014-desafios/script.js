function tabuada() {
    let num = document.getElementById('itxtnum')
    let tabuada = document.getElementsByName('itabuada')

    if (num.value.length == 0) {
        alert ('Por favor, digite um numero!')
    }else {
        let x = Number(num.value)
        let c = 0
        // while (c <= 10 ){
        //     c++
            
        // }
        for (let c = 0 ; c <= 10 ; c++) {

            let res = x*c
            tabuada[0].innerHTML = `${x} x ${c} = ${res}`
            
        }
    }
}