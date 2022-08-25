/*let app = require('express')()*/
let express = require('express')
let app = express()
let bodyParser = require('body-parser')

//Moteur de template
app.set('view engine', 'ejs' )

// Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//Routes
app.get('/', function (req, res) {
  res.render('pages/index', {test: 'Salut'})
})

app.post('/', function (req, res){
  console.log(req.body)
})

app.listen(80)