const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT, function() {
  console.log('App listening on port 5000')
})
