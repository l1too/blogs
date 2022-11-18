import express from 'express'

import cors from 'cors'

import db from './database/db.js'

import BlogsRoutes from './routes/routes.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', BlogsRoutes)



try {
    await db.authenticate()
    console.log("conexion exitosa a la DB")
} catch (error) {
    console.log(`La conexion a la DB tiene el siguiente erorr: ${error}`)
}

// app.get('/', (req, res) => {
//     res.send("Hola mundo")
// })

app.listen(8000, ()=> {
    console.log("server UP running in http://localhost:8000/")
})