const express = require('express')
const request = require('request')
const app = express()
const herokuPort = "process.env.PORT"
const local = 5000


app.use(express.static('public'))

request('https://duunitori.fi/api/v1/jobentries?search=harjoittelija&format=json', function(error, response, body) {
  console.error('error: ', error)
  console.log('statusCode: ', response && response.statusCode)
  app.get("/trainee", function(req, res) {
    res.set('Content-Type', 'application/json')
    res.send(body)
  })
})




app.listen(herokuPort, function() {
  console.log('App listening on 5000')
})
