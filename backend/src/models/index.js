import { Client } from 'pg'

export function postgres(){
    const client = new Client({
        user: "test",
        password: "test",
        host: "localhost",
        database: "house",
        port: 5432
    })
    return client
}
