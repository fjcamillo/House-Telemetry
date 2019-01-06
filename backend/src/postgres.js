import { Client } from 'pg'

export function dbConnection(){
    return async (ctx, next) => {
        const client = new Client({
            user: "test",
            password: "test",
            host: "postgres",
            database: "house",
            port: 5432
        })
        ctx._connection = client
        await next()
    }
}

export function connect(ctx){
    return ctx._connection
}
