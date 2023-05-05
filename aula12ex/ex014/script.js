function carregar() {
    let msg = document.querySelector("#msg")
    let img = document.querySelector("#imagem")
    let agora = new Date()
    let horaAtual = agora.getHours()
    
    if (horaAtual < 12) {
        msg.innerText = `Agora são ${horaAtual} horas`
        img.src = "fotomanha.png"
        document.body.style.backgroundColor = "#e2cd9f"
    }else if(horaAtual < 18) {
        msg.innerText = `Agora são ${horaAtual} horas`
        img.src = "fototarde.png"
        document.body.style.backgroundColor = "#b9846f"
    }else {
        msg.innerText = `Agora são ${horaAtual} horas`
        img.src = "fotonoite.png"
        document.body.style.backgroundColor = "#515154"
    }
}