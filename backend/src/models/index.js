import { Client } from 'pg'

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "house",
    port: 5432
})

client.connect()

export function postgres(){
    return client
}