import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import connectDatabase from './database/connectDatabase.js'

// Routes Imports
import productsRouter from './routes/productsRoutes.js'
import brandsRouter from './routes/brandsRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/products',productsRouter)
app.use('/brands',brandsRouter)

app.get('/', (req, res) => {
  res.send('Hello world')
})


const startServer = async () => {
  try {
    await connectDatabase(process.env.DATABASE_URL)
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}

startServer()
