function adicionar() {
    let txtn = document.querySelector("#txtn")
    let resultadoSelect = document.querySelector("#resultado-select")
    let options = document.createElement("option")
    let numeros = txtn.value
    let lista = []

    if(numeros >= 1 && numeros <= 100 && txtn.value.length != 0) {
        options.innerText = `Valor ${numeros} adicionado`
        resultadoSelect.appendChild(options)
        resultadoSelect += options
        lista.push(numeros)
    }else if(lista.indexOf(txtn.value) != -1) {
        alert("Valor inválido ou já encontrado na lista") 
    } 
    txtn.value = ""
    console.log(lista)
}


function finalizar() {
    let txtn = document.querySelector("#txtn")
    let resultado = document.querySelector("#resultado")
}