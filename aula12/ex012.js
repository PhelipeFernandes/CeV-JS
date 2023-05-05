let agora = new Date()
let horaAtual = agora.getHours()
console.log(`Agora são ${horaAtual} horas`)
if(horaAtual > 6 && horaAtual < 12) {
    console.log("Bom dia!")
}else if (horaAtual < 18) {
    console.log("Boa tarde")
}else if (horaAtual <= 23) {
    console.log("Boa noite")
}else{
    console.log("Boa madrugada")
}