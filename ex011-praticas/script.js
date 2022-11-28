function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = Number(document.querySelector('input#itxtano').value)
    var res = document.getElementById('resp')
    var idad = 2022 - nasc
    
    if (nasc == 0 || nasc > ano) {
        alert(`ERROR Verifique as infomações novamente`)
    } else {
        var fsex = document.getElementsByName('sexo')
        var genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'
        }else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Sou ${genero} e tenho ${idad} de idade`)  
        
    }
    
}