//Aula sobre Assync e Await 

function aleatorio(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) - min)
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('EROOOU! - COM A VOZ DO FAUSTO SILVA'))
        setTimeout(() => {
            resolve(console.log(msg + " Pasei na promise")
            )
        }, tempo)
    })
}

// esperaAi('fase 1', aleatorio(0, 3))
// .then(resposta => {
//     console.log(resposta)
//     return esperaAi('fase 2', aleatorio())
// })
// .then(resposta =>{
//     console.log(resposta)
//     return esperaAi('fase 3', aleatorio())
// })
// .then(resposta => {
//     console.log(resposta)
    
// })
// .then(()=> console.log('terminamos aqui'))
// .catch(e=>console.log(e))

async function executar(){
    await esperaAi('fase 1', aleatorio())
    await esperaAi('fase 2', aleatorio())
    await esperaAi('fase 3', aleatorio())
    console.log('terminamos aqui')
}
executar()
