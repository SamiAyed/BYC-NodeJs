const express = require('express') // require Express module
const app = express() // Create Express Application

const bodyParser = require('body-parser')

// load the users routes
const userRoutes = require('./routes/users')

app.use(bodyParser.json())

// use the users routes
app.use('/users', userRoutes)

// Run The Server
app.listen(3000, () => {
    console.log('Server listening')
})
