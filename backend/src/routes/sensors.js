import { create, filterByType, filterById, retrieveAll} from '../models/sensors'
import {connect} from '../postgres'

/**
 * 
 * @param {router} router | Middleware Router
 */
export function routes(router){
    router
        .post('/sensors', async ctx => {
            const res = await create(connect(ctx), {
                created_at: new Date().getTime(),
                updated_at: new Date().getTime(),
                deleted: false,
                sensor_type: ctx.query.sensor_type,
                reading: parseInt(ctx.query.reading) || -1
            })
            ctx.status = 200
            ctx.body = {
                ...res
            }
        })
        .get('/sensors', async ctx => {
            const res = await retrieveAll(connect(ctx))
            ctx.status = 200
            ctx.body = res
        })
        .get('/sensors/:id', async ctx => {
            const res = await filterById(connect(ctx), ctx.params.id)
            ctx.status = 200
            ctx.body = res
        })
        .get('/sensors-type/:type', async ctx => {
            const res = await filterByType(connect(ctx), ctx.params.type)
            ctx.status = 200
            ctx.body = res
        })
}