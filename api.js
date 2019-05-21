var express = require('express')
var app = express()
const api = express.Router()

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

api.get('/rick', (req, res) => {
  res.writeHead(302, {
    Location: 'https://rickroll.now.sh'
  })
  res.end()
})

api.get('/:param', (req, res) => {
  res.send(req.params.param.toUpperCase())
})
api.get('/', (req, res) => {
  res.send(
    `
    All Caps As a Service

    Put something after the / to change it to all uppercase

github.com/joshkmartinez/caps
    `
  )
})
app.use('/', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
