// Hello world

/*let mensagem = "Hello world"
console.log(mensagem);
*/


//arrays, objetos

/*let metas = ["Ryan", "alô"]

console.log(metas[1] + " " + metas[0])
*/

/*
let meta = {
    value: 'Ler um livro por mês',
    checked: false
}


let metas = [
    meta,
    {value: 'Caminhar 20 minutos todos os dias',
    checked: false
    }
]


console.log(metas[0].value)
//functions

const criarMeta = () => {} 
    */


const start = ()=>{
   while(true){
    let opcao = "sair" 
    switch(opcao){
        case "cadastrar":
            console.log("vamos cadastrar")
            break
        case "listar":
            console.log("Vamos listar")
            break
        case "sair":
            return    
    }

    return
    }
}
    start()

    