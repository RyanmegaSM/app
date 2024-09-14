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

const {select, input, checkbox} = require('@inquirer/prompts')

let meta = {
    value: "Tomar 3l de agua por dia",
    checked: false,

}

let metas =[meta]



const cadastrarMeta = async() =>{
    const meta = await input({message:"Digite a meta: "})


    if(meta.length == 0){
        console.log("Necessario digitar algo!!")
        return cadastrarMeta()
    }
    metas.push({value: meta, checked:false})
}


const listarMetas = async() =>{
    const respostas = await checkbox({
        message: "Use setas para mudar a meta, espaço para marcar/desmarcar e o Enter para finalizar",
        choices:[...metas],
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
     })     

     if(respostas.length == 0){
        console.log("Nenhuma meta selecioanada")
        return
     }

     respostas.forEach((resposta)=> {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true
     })

     console.log("Meta(s) concluida(s)")
}


const metasRealizadas = async() =>{
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })
    if(realizadas.length == 0){
        console.log("Não existe metas cadastradas")
        return
    }
    await select({
        message:"Metas realizadas",
        choices:[...realizadas]
    })
} 

const start = async()=>{
   while(true){
        const opcao = await select({
            message:"Menu >",
            choices:[
                {
                name: "Cadastrar meta",
                value: "cadastrar"
                }, 
                {
                    name:"Listar metas",
                    value:"listar"
                },
                {
                    name:"metas realizadas",
                    value:"realizadas"
                },
                {
                    name: "Sair",
                    value:"sair"
                }
            ]
    }) 
    
    
    
    switch(opcao){
        case "cadastrar":
            await cadastrarMeta()
            console.log(metas)
            break
        case "listar":
          await listarMetas()
            break
       case "realizadas":
            await metasRealizadas()
            break
        case "sair":
        console.log("Até a proxima")   
        return    
    }

    
    }
}
    start()

