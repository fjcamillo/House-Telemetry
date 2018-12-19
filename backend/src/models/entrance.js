
export async function retrieve(client){
    const res = await client.query("SELECT * from sensors where sensor_type=pir")
    return res
}

export async function create(client, data){
    
    const res = await client.query("INSERT INTO sensors VALUES ($1, $2, $3, $4, $5) RETURNING id", [
        data.created_at,
        data.updated_at,
        data.deleted,
        data.sensor_type,
        data.reading
    ])
    return res
}