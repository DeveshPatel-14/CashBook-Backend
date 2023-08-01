import express from 'express'
import connectDB from './dbConnect.js'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import transactionRoutes from './routes/transactionRoutes.js'
import cors from 'cors'
import path from 'path'

dotenv.config()
connectDB()

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 

const app = express()
app.use(cors(corsOptions))
app.use(express.json())


// Available routes
app.use('/api/users', userRoutes)
app.use('/api/transactions', transactionRoutes)

app.get('/', (req, res) => 
{
    res.send('API is running....')
})


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
