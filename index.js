import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

const app = express()
app.use(express.json())
dotenv.config()
connectDB()

// const dominiosPermitidos = [process.env.FRONTEND_URL]
// const corsOptiones = {
//     origin: function(origin, callback) {
//         if(dominiosPermitidos.indexOf(origin) !== -1){
//             callback(null, true)
//         }else {
//             callback(new Error('No permitido por CORS'))
//         }
//     }
// }

// app.use(cors(corsOptiones))
app.use('/api/user', userRoutes )

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})