"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_router_1 = require("./users/users.router");
const server = new server_1.Server();
server.bootstrap([users_router_1.usersRouter]).then(server => {
    console.log('Server is listening on:', server.application.address());
}).catch(e => {
    console.log('Server failed to start');
    console.error(e);
    process.exit(1); //Terminar a aplicação
});
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
