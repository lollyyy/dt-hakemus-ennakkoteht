const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('/index.html')
})

app.listen(process.env.PORT, function() {
  console.log('App listening on port 5000')
})
