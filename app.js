const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('/index.html')
})

app.listen(5000, function() {
  console.log('App listening on port 5000')
})
