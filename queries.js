const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

//get all Drivers detail
const getDrivers = (request, response) => {
    pool.query('SELECT * FROM drivers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//get Driver by id
const getDriverById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM drivers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//create new Driver
const createDriver = (request, response) => {
    const { name, phone_number, identification_number } = request.body

    pool.query('INSERT INTO drivers (name, phone_number, identification_number) VALUES ($1, $2, $3)', [name, phone_number, identification_number], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

//Update driver data
const updateDriver = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, phone_number, identification_number } = request.body

    pool.query(
        'UPDATE drivers SET name = $1, phone_number = $2, identification_number = $3 WHERE id = $4',
        [name, phone_number, identification_number, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

//get all Vehicles detail
const getVehicles = (request, response) => {
    pool.query('SELECT * FROM vehicles ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//get Vehicle by id
const getVehicleById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM vehicles WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//create new Vehicle
const createVehicle = (request, response) => {
    const { registration_number, vehicle_model } = request.body

    pool.query('INSERT INTO vehicles (registration_number, vehicle_model) VALUES ($1, $2)', [registration_number, vehicle_model], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

//Update vehicle data
const updateVehicle = (request, response) => {
    const id = parseInt(request.params.id)
    const { registration_number, vehicle_model } = request.body

    pool.query(
        'UPDATE drivers SET registration_number = $1, vehicle_model = $2 WHERE id = $3',
        [registration_number, vehicle_model, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

//get all Routes detail
const getRoutes = (request, response) => {
    pool.query('SELECT * FROM routes ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//get Route by id
const getRouteById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM routes WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//create new Route
const createRoute = (request, response) => {
    const { route_name, route_short_name } = request.body

    pool.query('INSERT INTO routes (route_name, route_short_name) VALUES ($1, $2)', [route_name, route_short_name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

//Update route data
const updateRoute = (request, response) => {
    const id = parseInt(request.params.id)
    const { route_name, route_short_name } = request.body

    pool.query(
        'UPDATE drivers SET route_name = $1, route_short_name = $2 WHERE id = $3',
        [route_name, route_short_name, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

//get all Trips detail
const getTrips = (request, response) => {
    pool.query('SELECT * FROM trips ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//get Trips by id
const getTripById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM trips WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//create new Trip
const createTrip = (request, response) => {
    const { driver_id, vehicle_id, route_id, started_at, ended_at } = request.body

    pool.query('INSERT INTO trips (driver_id, vehicle_id, route_id, started_at, ended_at) VALUES ($1, $2, $3, $4, $5)', [driver_id, vehicle_id, route_id, started_at, ended_at], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

//Update trip data
const updateTrip = (request, response) => {
    const id = parseInt(request.params.id)
    const { driver_id, vehicle_id, route_id, started_at, ended_at } = request.body

    pool.query(
        'UPDATE drivers SET driver_id = $1, vehicle_id = $2, route_id = $3, started_at = $4, ended_at = $5 WHERE id = $6',
        [driver_id, vehicle_id, route_id, started_at, ended_at, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

module.exports = {

    //drivers
    getDrivers,
    getDriverById,
    createDriver,
    updateDriver,

    //vehicles
    getVehicles,
    getVehicleById,
    createVehicle,
    updateVehicle,

    //routes
    getRoutes,
    getRouteById,
    createRoute,
    updateRoute,

    //trips
    getTrips,
    getTripById,
    createTrip,
    updateTrip,
}