import * as restify from 'restify'

const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0',
})

server.get('/hello', (req, resp, next) => {

    //resp.contentType = 'application/json'
    resp.setHeader('Content-Type', 'application/json')
    resp.status(400)
    resp.send({ message: 'hello' })
    //resp.json({ message: 'hello' })
    /*
    resp.json faz as seguintes funções:
        resp.setHeader('Content-Type', 'application/json')
        resp.send({ message: 'hello' })
    mas o send é capaz de fazer isso tbm
    */

    return next()//Terminou
})

server.listen(3000, () => {
    console.log('API is running on http://localhost:3000')
})