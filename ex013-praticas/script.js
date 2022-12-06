function contar() {
    var x1 = document.getElementById('itxtnum1')
    var y1 = document.getElementById('itxtnum2')
    let s1 = document.getElementById('itxtnum3')
    var res = document.getElementById('respp')
    
    if (x1.value.length == 0 || y1.value.length == 0 || s1.value.length == 0) { 
        alert ("[IMPOSSIVEL CONTAR] Faltam dados")
        res.innerHTML = 'Impossivel contar...'
    }else {
        res.innerHTML = 'Contando:'
        var x = Number(x1.value)
        var y = Number(y1.value)
        let s = Number(s1.value)
        if (s <= 0) {
            alert (`[SALTO]passa a valer 1`)
            s = 1
        }
        if (x < y) {
            for (var c = x ; c <= y ; c += s)  {
                res.innerHTML += `${c}&#x1F449;`
            }
        }else {
            for (var c = x ; c >= y ; c -= s) {
                res.innerHTML += `${c}&#x1F449;`
            }          
        }
        res.innerHTML += `&#x1F3C1;`
    }

}