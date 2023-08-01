import express from 'express'
import connectDB from './dbConnect.js'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import transactionRoutes from './routes/transactionRoutes.js'
import cors from 'cors'
import path from 'path'

dotenv.config()
connectDB()



const app = express();

app.use(express.json());

const root = path.join(__dirname,'build')
app.use(express.static(root))

app.get('*', (req, res) => {
  res.sendFile('index.html', { root })
})

// Available routes
app.use('/api/users', userRoutes)
app.use('/api/transactions', transactionRoutes)

app.get('/', (req, res) => 
{
    res.send('API is running....')
})


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
