function carregar() {
    var msg = document.querySelector('p#msgg')
    var img = document.querySelector('div#imgg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são  ${hora} horas`
}