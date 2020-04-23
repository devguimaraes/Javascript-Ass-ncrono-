/*
Primeiramente, crie um arquivo chamado scripts.js. Neste arquivo, iremos criar uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes callbacks:

callbackSucesso() = trará uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par.
callBackError() = trará uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma).

*/

function valoresPares(valor1, valor2){
    return new Promise((resolve, reject)=>{
        if(typeof valor1 !== 'number' || typeof valor2 !== 'number') return reject('Os valores passados não são números')
        const SOMA_DOS_VALORES = valor1 + valor2
        if(SOMA_DOS_VALORES % 2 === 0){
            resolve('O valor passado é ' + Number(SOMA_DOS_VALORES))
        }else{
            reject('O valor somado não é um número par: '+ SOMA_DOS_VALORES)
        }
    })
}

async function resolvePromises(){
    try{
        let esquerda = await valoresPares(15, 1)
        console.log(typeof esquerda)
    }catch(erro){
        console.log(erro)
    }
}
resolvePromises()




