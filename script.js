function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = Number(document.querySelector('input#iano').value)
    var idad = 2022 - nasc
    if (nasc == 0 || nasc > ano) {
        alert ('ERROR verificar dados novamente')
    }else {
        var res = document.getElementById('ress')
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked ) {
            genero = 'Masculino'
        }else if (sexo[1].checked) {
            genero = 'Feminino'
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `${idad} e  genero ${genero}`
    img.appendChild(img)
}