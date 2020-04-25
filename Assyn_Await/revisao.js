function aleatorio(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) - min)
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('EROOOU! - COM A VOZ DO FAUSTO SILVA'))
        setTimeout(() => {
            resolve(msg + " Pasei na promise")
            
        }, tempo)
    })
}

async function executar(){
    const f1 = await esperaAi('primeira frase', aleatorio())
    const f2 = await esperaAi('primeira segunda', aleatorio())
    const f3 = await esperaAi('primeira terceira', aleatorio())
    
}

executar()
