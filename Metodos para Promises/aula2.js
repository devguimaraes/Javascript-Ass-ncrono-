//Metodos uteis de promisses

/*
Metodos que veremos nessa aula
- Promises.all
- Promises.race
- Promises.resolve
- Promises.reject

*/


function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) - min)
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string'){
            reject(new Error('EROOOU!!!! - COM A VOZ DO FAUSTO SILVA'))
            return
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - PASSEI NA PROMISE')
        }, tempo)
    })
}

//Promisses.all - Resolve todas as promessas de uma vez
//Promises all só deve ser usado quando uma promise não depende de outra

const VALORES = [

esperaAi('Promises 1', aleatorio(1,5)),
esperaAi('Promises 2', aleatorio(1,5)),
esperaAi('Promises 3', aleatorio(1,5)),
esperaAi('Promises 4', aleatorio(1,5)),

];

//Resolvendo as promises feito acima
// Promise.all(VALORES).then(function(valor){
//     console.log(valor)
// })
// .catch(e => console.log(e))

//Promise race - Retorna sempre a primeira Promises a ser executada
// Promise.race(VALORES).then((valor)=>{
//     console.log(valor)
// })


//Promise resolve e reject
function verificaTrueAndFalse(valor){
    let flag = valor;
    if(flag){
        return Promise.resolve('Ai sim, sua flag és VERDADEIRA')
    }else {
        return Promise.reject('Oh, NO! SUA FLAG É FALSE QUE NEM VOCÊ BITCH')
    }
}

const bandeira = true

verificaTrueAndFalse(bandeira)
.then(resposta => console.log(resposta))
.catch(erro => console.log(erro))

