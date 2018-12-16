import Koa from 'koa'
import Router from 'koa-router'
import * as swagger from 'swagger'
import {validate as swaggerValidate, ui as swaggerUI } from 'swagger2-koa'

import { routes as pirRoutes } from './routes/pir'


const app = new Koa()
const router  = new Router()

for (const route in [
    pirRoutes
]){
    router(router)
}


app.use(router.route())
app.use(router.all)
app.listen(3500, console.log('running at 3500'))
