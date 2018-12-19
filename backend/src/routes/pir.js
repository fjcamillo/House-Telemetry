import { create, retrieve } from '../models/entrance'
import { postgres } from '../models/index'

export function routes(router){
    router
        .post('/sensor/pir', async ctx => {
            debugger;
            console.log(ctx.query)
            const res = await create(postgres(), {
                created_at: new Date(),
                updated_at: new Date(),
                deleted: false,
                sensor_type: "PIR",
                reading: parseInt(ctx.query.reading) || "None"
            })
        })
}