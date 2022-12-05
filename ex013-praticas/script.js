function contar() {
    var x1 = document.getElementById('itxtnum1')
    var y1 = document.getElementById('itxtnum2')
    var s1 = document.getElementById('itxtnum3')
    var res = document.getElementById('respp')
    
    if (x1.value.length == 0 || y1.value.length == 0 || s1.value == 0) {
        alert ("IMPOSSIVEL CONTAR")
    }else {
        res.innerHTML = 'Contando:'
        var x = Number(x1.value)
        var y = Number(y1.value)
        var s = Number(s1.value)

        for (var c = x ; c <= y ; c = c + s)  {
            res.innerHTML += `${c}`
        }
        
    }

}