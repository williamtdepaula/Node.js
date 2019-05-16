import {Server} from './server/server'

const server = new Server()
server.bootstrap().then(server => {
    console.log('Server is listening on:', server.application.address())
}).catch(e => {
    console.log('Server failed to start')
    console.error(error)
    process.exit(1)//Terminar a aplicação
})

/*********************** O HEADER ESTÁ NO PROTOCOLO ENTÃO ESTÁ NA REQUISIÇÃO E NA RESPOSTA **********************/

//FUNÇÕES (req, resp, next)
/*
    req: coisas que estão vindo da requisição
    resp: resposta que iremos retornar para a requisição
    next: Pode ser para indicar que a requisição finalizou, ou passar para o
          próximo callback da requisição (PODE-SE PASSAR UM ARRAY DE CALLBACKS NA REQUISIÇÃO)
*/

//Setar Headers
/*
    resp.setHeader('Content-Type', 'application/json')
*/


//Setar Status
/*
    resp.status(400)
*/

//ENVIAR RESPOSTA
/*
    resp.send({ message: 'hello' })
                ou
    resp.json({ message: 'hello' })
*/