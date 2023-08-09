const express=require('express')
const app=express()
const connectDB=require('./config/database')
const homeRoutes=require('./routes/home')
const newsRoutes=require('./routes/news')
const monitorRoutes=require('./routes/monitor')
const { urlencoded } = require('body-parser')
//for authentication
//const passport = require('passport')
//const session = require('express-session')
//const MongoStore = require('connect-mongo')(session)
//Flash Messages for your Express Application with simple and beautifull pop-up flash.
//const flash = require('flash-express')
//HTTP request logger middleware for node.js
//const logger = require('morgan')

//require('./config/passport')(passport)


require('dotenv').config({path:'./config/.env'})
connectDB()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     })
//   )
  
// Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(flash())

app.use('/',homeRoutes)
app.use('/news',newsRoutes)
app.use('/monitor',monitorRoutes)

let PORT=8000
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})
