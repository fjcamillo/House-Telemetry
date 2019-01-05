import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import * as swagger from 'swagger2'
import {validate as swaggerValidate, ui as swaggerUI } from 'swagger2-koa'

import { routes as pirRoutes } from './routes/pir'


const app = new Koa()
const router  = new Router()

for (const route of [
    pirRoutes
]){
    route(router)
}

const spec = swagger.loadDocumentSync("src/swagger.yml")
if(!swagger.validateDocument(spec)){
    throw Error("Please fix your swagger file")
}

router.get('/explorer', ctx => {
    ctx.body = spec
    ctx.status = 200
})

app.use(bodyParser())
app.use(router.routes())
app.use(swaggerUI(spec, '/explorer'))
app.use(router.allowedMethods())
app.listen(3500, console.log('running at 3500'))
