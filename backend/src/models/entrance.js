import { postgres } from './index'


export async function retrieve(){
    postgres.connect()
    const res = await postgres.query("SELECT * from sensors where sensor_type=pir")
    postgres.end()
    return res
}

export async function create(data){
    postgres.connect()
    const res = await postgres.query("INSERT INTO sensors VALUES ($1, $2, $3, $4, $5) RETURNING id", [
        data.created_at,
        data.updated_at,
        data.deleted,
        data.sensor_type,
        data.reading
    ])
    postgres.end()
    return res
}