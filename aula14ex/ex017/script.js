function calcular() {
    let txt = document.querySelector("#txt")
    let res = document.querySelector("#res")
    let resultado = document.querySelector("#result")
    let numero = Number(txt.value)
    resultado.innerText = ""
    if (txt.value.length == 0) {
        alert("Digite um valor")
    }else {
        for(let c = 0;c <= 10;c++){
            let item = document.createElement("option")
            item.innerText = `${numero} x ${c} = ${numero * c}`
            resultado.appendChild(item)
        }
    }
    

    
        
    
}