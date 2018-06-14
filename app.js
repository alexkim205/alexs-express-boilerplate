var express = require('express')
const app = express()

// register pug as view engine
app.set('view engine', 'pug')

// get response
var indexRouter = require('./routes/index')
app.use('/', indexRouter);

// serve static files in folder called public
app.use(express.static('public'))

// listen on port 3000
app.listen(3000, () => console.log('Example app listening on port 3000!'))
