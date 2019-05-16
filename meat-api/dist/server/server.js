"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
class Server {
    initRoutes() {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'meat-api',
                    version: '1.0.0',
                });
                this.application.use(restify.plugins.queryParser()); //Configurando para pegar os paramentros passado na url
                this.application.listen(3000, () => {
                    resolve(this.application);
                });
                //routes
                /********************* EXEMPLO *********************/
                this.application.get('/hello', (req, resp, next) => {
                    //resp.contentType = 'application/json'
                    resp.setHeader('Content-Type', 'application/json');
                    resp.status(400);
                    resp.send({ message: 'hello' });
                    //resp.json({ message: 'hello' })
                    /*
                    resp.json faz as seguintes funções:
                        resp.setHeader('Content-Type', 'application/json') ou resp.contentType = 'application/json'
                        resp.send({ message: 'hello' })
                    mas o send é capaz de fazer isso tbm
                    */
                    return next(); //Terminou
                });
                this.application.get('/info', [
                    (req, resp, next) => {
                        if (req.userAgent() && req.userAgent().includes('MSI')) { //caso o navegador seja o MSI ele da erro
                            /*resp.status(400)
                            resp.json({message: 'Please, update your browser'})*/
                            let error = new Error();
                            error.statusCode = 400;
                            error.message = 'Please, update your browser';
                            return next(error);
                        }
                        return next(); //passa para a próxima callback, se chamar next(false), não passa para a próxima requisição
                    },
                    (req, resp, next) => {
                        resp.json({
                            browser: req.userAgent(),
                            method: req.method,
                            url: req.href(),
                            path: req.path(),
                            query: req.query //Configurado acima, usado para pegar os paramentros passado na url 
                        });
                        return next();
                    }
                ]);
                /*this.application.on('error', (err) => {
                    console.log(err)
                }) CASO EU QUEIRA QUE FAÇA UM TRATAMENTO CASO OCORRA UM ERRO,
                    MAS QUEREMOS QUE APLICAÇÃO PARE CASO DE ERRO*/
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap() {
        return this.initRoutes().then(() => this);
    }
}
exports.Server = Server;
