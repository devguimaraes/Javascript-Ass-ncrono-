// function callbackSucesso(){
//     console.log('Os valores somados são pares')
// }

// function callbackError(){
//     console.log('Os valores somados não representam um número PAR')
// }


// function somar(valor1, valor2){
//     let soma = valor1 + valor2
//     if(soma % 2 == 0){
//        return callbackSucesso()
//     }else{
//         return callbackError()
//     }
// }

// somar(2, 1)

function somar(valor1, valor2){
    return new Promise((sucess, reject)=>{
        const somar = valor1 + valor2
        if(somar % 2 == 0){
            sucess(somar)
        }
        if(somar % 2 !== 0){
            reject(new Error('Opps! Os valores somados não correspondem um número par'))
        }
    })
}

somar(10, 19)
.then((resposta)=>{
    console.log('Os valores somados representam um número PAR')
    return resposta
})
.then((resposta) =>{console.log('A soma dos valores é ' + resposta)})
.catch(error => console.log(error))
