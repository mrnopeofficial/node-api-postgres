const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

//api for drivers
app.get('/drivers', db.getDrivers)
app.get('/drivers/:id', db.getDriverById)
app.post('/drivers', db.createDriver)
app.put('/drivers/:id', db.updateDriver)

//api for vehicles
app.get('/vehicles', db.getVehicles)
app.get('/vehicles/:id', db.getVehicleById)
app.post('/vehicles', db.createVehicle)
app.put('/vehicles/:id', db.updateVehicle)

//api for routes
app.get('/routes', db.getRoutes)
app.get('/routes/:id', db.getRouteById)
app.post('/routes', db.createRoute)
app.put('/routes/:id', db.updateRoute)

//api for trips
app.get('/trips', db.getTrips)
app.get('/trips/:id', db.getTripById)
app.post('/trips', db.createTrip)
app.put('/trips/:id', db.updateTrip)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})