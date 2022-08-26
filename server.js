/*let app = require('express')()*/
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')

//Moteur de template
app.set('view engine', 'ejs' )

// Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(session({
  secret: 'keyboart cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//Routes
app.get('/', function (req, res) {
  if (req.session.error) {
    res.locals.error = req.session.error
    req.session.error = undefined
  }
  res.render('pages/index')
})

app.post('/', function (req, res){
  if (req.body.message === undefined || req.body.message === ''){
    req.session.error = "Il y a une erreur"
    res.redirect('/')
  }
})

app.listen(80)