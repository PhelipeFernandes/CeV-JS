function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let txtano = document.querySelector("#txtano")
    let res = document.querySelector("#res")
    if(txtano.value.length === 0 || txtano.value > anoAtual) {
        alert("[ERRO] Verifique os dados e tente novamente.")
    }else {
        let sexo = document.getElementsByName("sexo")
        let idade = anoAtual - Number(txtano.value)
        let genero = ""
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (sexo[0].checked) {
            genero = "masculino"
            if(idade > 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "homem-bebe.png")
            }else if(idade < 21) {
                //Jovem`
                img.setAttribute("src", "homem-jovem.png")
            }else if(idade < 60) {
                //Adulto
                img.setAttribute("src", "homem-adulto.png")
            }else {
                //Idoso
                img.setAttribute("src", "homem-idoso.png")
            }
        }else if (sexo[1]. checked) {
            genero = "feminino"
            if(idade > 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "mulher-bebe.png")
            }else if(idade < 21) {
                //Jovem
                img.setAttribute("src", "mulher-jovem.png")
            }else if(idade < 60) {
               //Adulto
               img.setAttribute("src", "mulher-adulta.png")
            }else {
                //Idoso
                img.setAttribute("src", "mulher-idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerText = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}