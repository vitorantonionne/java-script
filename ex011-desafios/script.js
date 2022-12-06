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
        var img = document.createElement('img')
        img.setAttribute('id', 'Foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idad > 0 && idad <10) {
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            }else if (idad < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            }else if (idad < 50) {
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            }else {
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idad > 0 && idad <10) {
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            }else if (idad < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            }else if (idad < 50) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            }else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Sou ${genero} e tenho ${idad} de idade`)
        res.appendChild(img)
        
    }
    
}