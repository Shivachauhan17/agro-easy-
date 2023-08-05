const express=require('express')
const app=express()
const connectDB=require('./config/database')
const homeRoutes=require('./routes/home')
//const newsRoutes=require('./routes/news')
//const monitorRoutes=require('./routes/monitor')
const { urlencoded } = require('body-parser')


require('dotenv').config({path:'./config/.env'})
connectDB()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',homeRoutes)
//app.get('/news',newsRoutes)
//app.get('/monitor',monitorRoutes)

let PORT=8000
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})
// const server = http.createServer((req,res) => {
//     const page = url.parse(req.url).pathname
//     const params = querystring.parse(url.parse(req.url).query)
//     console.log(page)
//     if(page == '/'){
//         fs.readFile('index.html', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'text/html'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/css/header.css'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/css/header.css', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'text/css'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/css/main.css'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/css/main.css', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'text/css'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/css/footer.css'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/css/footer.css', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'text/css'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/img/logo.webp'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/img/logo.webp', (error,data) => {
//             res.writeHead(200, {'Content-Type' :  'image/webp'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/css/linkedinLogo.png'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/css/linkedinLogo.png', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'image/png'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/css/twitterLogo.jpeg'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/css/twitterLogo.jpeg', (error, data) => {
//             res.writeHead(200, {'Content-Type' : 'image/jpeg'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/css/bodyBackground.jpg'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/css/bodyBackground.jpg', (error, data) => {
//             res.writeHead(200, {'Content-Type' : 'image/jpg'})
//             res.write(data)
//             res.end()
//         })
//     }




//     else if(page == '/assets/monitor/monitor.html'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/monitor/monitor.html', (error, data) => {
//             res.writeHead(200, {'Content-Type' : 'text/html'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/monitor/monitor.css'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/monitor/monitor.css', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'text/css'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/img/dummy_monitor_img.png'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/img/dummy_monitor_img.png', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'image/png'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/img/dummy_person_dp.jpeg'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/img/dummy_person_dp.jpeg', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'image/jpeg'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/index.html'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/index.html', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'text/html'})
//             res.write(data)
//             res.end()
//         })
//     }
    




//     else if(page == '/assets/newsPage/newsPage.html'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/newsPage/newsPage.html', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'text/html'} )
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/newsPage/newPage.css'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/newsPage/newPage.css', (error,data) => {
//             res.writeHead(200, {'Content-Type' : 'text/css'})
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(page == '/assets/newsPage/newsPage.js'){
//         fs.readFile('/home/shiva1974/Desktop/farmer-crop-health-assist-website/assets/newsPage/newsPage.js', (error, data) => {
//             res.writeHead(200, {'Content-Type' : 'text/javascript'})
//             res.write(data)
//             res.end()
//         })
//     }

    
// })

// server.listen(8000)