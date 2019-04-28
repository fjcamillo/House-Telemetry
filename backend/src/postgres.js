import { Client } from 'pg'
import {config} from './config'


export function dbConnection(){
    return async (ctx, next) => {
        const client = new Client({
            user: config.DATABASE_USER,
            password: config.DATABASE_PASSWORD,
            host: config.DATABASE_HOST,
            database:config.DATABASE_NAME,
            port: config.DATABASE_PORT
        })
        ctx._connection = client
        await next()
    }
}

export function connect(ctx){
    return ctx._connection
}
