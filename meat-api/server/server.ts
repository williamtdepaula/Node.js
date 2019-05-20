import * as restify from 'restify'
import * as mongoose from 'mongoose'
import { environment } from '../common/environment'
import { Router } from '../common/router'

export class Server {

    application: restify.Server

    initializeDb(): mongoose.MongooseThenable{
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.url, {
            useMongoClient: true,

        })
    }

    initRoutes(routers): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                this.application = restify.createServer({//Configurando o server
                    name: 'meat-api',
                    version: '1.0.0',
                })

                this.application.use(restify.plugins.queryParser())//Configurando para pegar os paramentros passado na url
                this.application.use(restify.plugins.bodyParser())//Transforma os parametros da requisição em um objeto JSON

                this.application.listen(environment.server.port, () => {//Qual porta queremos ouvir
                    resolve(this.application)
                })

                //routes

                for (let router of routers) {
                    router.applyRoutes(this.application)
                }

            } catch (error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server> {
        return this.initializeDb().then(() =>
            this.initRoutes(routers).then(() =>
                this
            )
        )
    }
}