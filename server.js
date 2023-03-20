import express from 'express'
import indexRoute from './routes/index.js'
import stekjesRoute from './routes/stekjes.js'
const server = express()

// Stel het poortnummer in
server.set('port', process.env.PORT || 8000)

// Stel de view engine in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel de public map in
server.use(express.static('public'))

server.use('/', indexRoute)
server.use('/stekjes', stekjesRoute)

server.use(express.json())
server.use(express.urlencoded({ extended: true }))


// Start met luisteren
server.listen(server.get('port'), () => {
  console.log(`Application started on http://localhost:${server.get('port')}`)
})


