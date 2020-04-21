/*
              ##CLEAN CODE
VARIAVEIS:

Usar sempre nomes descritivos, onde fica bem claro o seu uso.
Exemplo de mal uso de variaveis:
 var c = 0;
 var tempo = 15

Exemplo de bom uso de variaveis
 var chamadaRealizadaParaApi = 0;
 var tempoParaAguardarRespostas = 15;

Outro bom uso é sempre usar capsLock quando for nomear constantes

 const USUARIO = 'Borges'
 const E_MAIL_USUARIO = 'fulano@gmail.com'


 FUNÇÕES:

 Uma função deve fazer apenas uma única coisa.
 funções devem ter no máximo dois argumentos, caso precise passar mais use objejtos

 functio({nome: 'gabriel', idade: 28, telefone: 21-999999999}){
     ....//conteúdo da function
 }

 
 }

 Usar comentário de blocos antes de uma função faz com que o comentário se torner fisiviel 
 quando usar a função em outro lugar, basicamente da forma como funciona o hover do css



 
CLASSES


*/
class Utilitarios {
    constructor(nome){
        this.setTexto = nome
    }
    
   

    get getTexto(){
        return `Peguei com get: ${this.texto}`
    }

   
    set setTexto(valor){
        if(typeof valor !== 'number'){
            console.log('Valor precisa ser um número')
            return
        }

        this.texto = valor
    }

}

const seila = new Utilitarios(900)
console.log(si)








