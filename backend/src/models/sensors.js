export async function retrieveAll(connect){
    await connect.connect()
    const res = await connect.query("SELECT * from sensors")
    await connect.end()
    return res.rows
}

export async function filterByType(connect, sensorType){
    await connect.connect()
    const res = await connect.query("SELECT * from sensors WHERE sensor_type = $1", [sensorType])
    await connect.end()
    return res.rows
}

export async function filterById(connect, id){
    await connect.connect()
    const res = await connect.query("SELECT * from sensors WHERE id = $1", [id])
    await connect.end()
    return res.rows[0]
}

export async function create(connect, data){
    await connect.connect()
    const res = await connect.query("INSERT INTO sensors (created_at, updated_at, deleted, sensor_type, reading) VALUES ($1, $2, $3, $4, $5) RETURNING id", [
        data.created_at,
        data.updated_at,
        data.deleted,
        data.sensor_type,
        data.reading
    ])
    await connect.end()
    return res.rows[0]
}