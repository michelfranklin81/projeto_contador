function contar() { //Criar uma função ao clicar no botão contar
    let ini = document.getElementById('txti') //Trazer o valor do input ini para dentro da função
    let fim = document.getElementById('txtf') //Trazer o valor do input fim para dentro da função
    let passo = document.getElementById('txtp') //Trazer o valor do input passo para dentro da função
    let res = document.getElementById('res') //Trazer o valor do input res para dentro da função
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //Se o valor de ini ou fim ou passo for igual a zero mostrar a msg "Impossível contar"
        //window.alert('[ERRO] Faltam dados')
        res.innerHTML = `Impossível contar`
    } else { 
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value) //Converter a variável ini para Number
        let f = Number(fim.value) //Converter a variável fim para Number
        let p = Number(passo.value) //Converter a variável passo para Number
        if(p <= 0) { //Se o passo for menor ou igual a zero mostrar a msg "Passo inválido... e fazer a contagem do passo como 1 considerando este como padrão"
            alert(`Passo inválido! Considerando passo 1`)
            p = 1
        }
        if (i < f) { // Comando para fazer a contagem por ordem crescente
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}	`
            }

        } else { // Comando para fazer a contagem por ordem decrescente
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}