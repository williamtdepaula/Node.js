"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const users_model_1 = require("./users.model");
class UsersRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/users', (req, resp, next) => {
            users_model_1.User.find().then(users => {
                resp.json(users);
                return next();
            });
        });
        application.get('/users/:id', (req, resp, next) => {
            users_model_1.User.findById(req.params.id).then(user => {
                if (user) {
                    resp.json(user);
                    return next();
                }
                resp.send(404);
                return next();
            });
        });
        application.post('/users', (req, resp, next) => {
            let user = new users_model_1.User(req.body); //Passa todos os atributos pra model
            user.save().then(user => {
                user.password = undefined;
                resp.json(user);
                return next();
            });
        });
        application.put('/users/:id', (req, resp, next) => {
            const options = { overwrite: true };
            users_model_1.User.update({ _id: req.params.id }, req.body, options);
        });
        /********************* EXEMPLO *********************/
        /*this.application.get('/hello', (req, resp, next) => {

            //resp.contentType = 'application/json'
            resp.setHeader('Content-Type', 'application/json')
            resp.status(400)
            resp.send({ message: 'hello' })
            //resp.json({ message: 'hello' })
            /*
            resp.json faz as seguintes funções:
                resp.setHeader('Content-Type', 'application/json') ou resp.contentType = 'application/json'
                resp.send({ message: 'hello' })
            mas o send é capaz de fazer isso tbm
            

            return next()//Terminou
        })

        this.application.get('/info', [
            (req, resp, next) => {
                if (req.userAgent() && req.userAgent().includes('MSI')) {//caso o navegador seja o MSI ele da erro
                    /*resp.status(400)
                    resp.json({message: 'Please, update your browser'})
                    let error: any = new Error()
                    error.statusCode = 400
                    error.message = 'Please, update your browser'
                    return next(error)
                }

                return next()//passa para a próxima callback, se chamar next(false), não passa para a próxima requisição
            },
            (req, resp, next) => {

                resp.json({
                    browser: req.userAgent(),//QUAL NAVEGADOR ESTÁ SENDO USADO PARA SER FEITA A REQUISIÇÃO
                    method: req.method,//Qual método, por exemplo HTTP
                    url: req.href(), // Ou req.url
                    path: req.path(), //Caminho da rota
                    query: req.query//Configurado acima, usado para pegar os paramentros passado na url
                })

                return next()
            }])



        /*this.application.on('error', (err) => {
            console.log(err)
        }) CASO EU QUEIRA QUE FAÇA UM TRATAMENTO CASO OCORRA UM ERRO,
            MAS QUEREMOS QUE APLICAÇÃO PARE CASO DE ERRO*/
    }
}
exports.usersRouter = new UsersRouter(); //Instanciando a classe UsersRouter
