function tabuada() {
    let num = document.getElementById('itxtnum')
    let tabuada = document.getElementById('itabuada')

    if (num.value.length == 0) {
        alert ('Por favor, digite um numero!')
    }else {
        let x = Number(num.value)
        tabuada.innerHTML = ''
            for (let c = 0 ; c <= 10 ; c++) {
                let item = document.createElement('option')
                item.value = `tabuada${c}`
                let res = x*c
                 item.text = `${x} x ${c} = ${res}`
                tabuada.appendChild(item)      
        }
    }
}