function carregar() {
    var msg = document.querySelector('p#msgg')
    var imge = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >=0 && hora < 6) {
        msg.innerHTML = `Agora são ${hora} hora`
        imge.src = 'imagens/madru.img.jpg'
        document.body.style.backgroundColor = '#515159'
    }else if (hora < 12) {
        msg.innerHTML = `Agora são ${hora} hora`
        imge.src = 'imagens/dia.img.jpg'
        document.body.style.backgroundColor = 'rgb(252, 252, 166)'

    }else if (hora <= 18 ) {
        msg.innerHTML = `Agora são ${hora} hora`
        imge.src = 'imagens/tarde.img.jpg'
        document.body.style.backgroundColor = '#A8B0BF'

    }else if (hora > 18){
        msg.innerHTML = `Agora são ${hora} hora`
        imge.src = 'imagens/noite.img.jpg'
        document.body.style.background = '#262626'

    }
}