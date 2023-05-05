let num = [5, 8, 2, 9, 3]
num.push(1)// Inclui o numero 1 na lista 'num'
num.sort()// Organiza os itens em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)//Caso o valor informado não exista, ele retorna o valor -1, caso contrario ele irá retornar o numero do índice dentro do Vetor
if (pos == -1) {
    console.log("Numero não encontrado")
}
console.log(`O valor ${num[pos]} está na posição ${pos}`)