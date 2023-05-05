function contar() {
    let inicio = document.querySelector("#inicio")
    let fim = document.querySelector("#fim")
    let passo = document.querySelector("#passo")
    let res = document.querySelector("#res")

            
            if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
                alert("[ERRO] Preencha as informações corretamente para realizar a contagem")
            }else if(inicio.value < fim.value) {
                res.innerText = "Contando:"
                let i = Number(inicio.value)
                let f = Number(fim.value)
                let p = Number(passo.value)
                if(p == 0){
                    alert("Considerando passo 1")
                    p = 1
                }
                for (let c = i; c <= f; c += p) {
                    res.innerText += ` ${c} \u{1F449}`                    
                }
                
            }else if (inicio.value > fim.value) {
                res.innerText = "Contando:"
                let i = Number(inicio.value)
                let f = Number(fim.value)
                let p = Number(passo.value)
                if(p == 0) {
                    alert("Considerando passo 1")
                    p = 1
                }
                for (let c = i; c >= f; c -= p) {
                    res.innerText += ` ${c} \u{1F449}`
                    
                }
                
            }else {
                alert("O início e fim da contagem não podem ser iguais.")
            }
            

            res.innerText += `\u{1F3C1}`
           
            
            



    

}