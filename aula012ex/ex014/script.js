function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        img.scr = 'fotomanha.png'
        document.body.style.background = '#ff9223'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#eba28b'
        background
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#001d3c'
    }
}
