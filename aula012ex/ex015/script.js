function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe_h.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem_h.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto_h.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso_h.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe_m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem_m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto_m.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso_m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}