const express=require('express')
const app=express()
const connectDB=require('./config/database')
const homeRoutes=require('./routes/home')
const newsRoutes=require('./routes/news')
const monitorRoutes=require('./routes/monitor')
const { urlencoded } = require('body-parser')


require('dotenv').config({path:'./config/.env'})
connectDB()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',homeRoutes)
app.use('/news',newsRoutes)
app.use('/monitor',monitorRoutes)

let PORT=8000
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})
