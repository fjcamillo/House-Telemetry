import { Client } from 'pg'
import {config} from './config'


/**
 * Starts DB Connection
 */
export function dbConnection(){
    return async (ctx, next) => {
        const client = new Client({
            user: config.DATABASE_USER,
            password: config.DATABASE_PASSWORD,
            host: config.DATABASE_HOST,
            database:config.DATABASE_NAME,
            port: config.DATABASE_PORT
        })
        ctx._connect = client
        await next()
    }
}

/**
 * 
 * @param {*} ctx 
 */
export function connect(ctx){
    return ctx._connect
}
