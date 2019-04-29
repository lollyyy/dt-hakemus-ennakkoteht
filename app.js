//Declare Express and Request variables
const express = require('express')
const request = require('request')
const app = express()

//Set express to host public directory
app.use(express.static('public'))

//Fetch job entires from Duunitori API and send them to front-end
request('https://duunitori.fi/api/v1/jobentries?search=harjoittelija&format=json', function(error, response, body) {
  console.error('error: ', error)
  console.log('statusCode: ', response && response.statusCode)
  app.get("/trainee", function(req, res) {
    res.set('Content-Type', 'application/json')
    res.send(body)
  })
})

//Set Express to listen to Heroku default port
app.listen(process.env.PORT, function() {
  console.log('App listening')
})
