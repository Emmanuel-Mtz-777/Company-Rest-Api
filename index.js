import express from 'express'
import dotenv from 'dotenv'
import employeeRouter from './routes/employes/employeRoutes.js';

const app = express()
dotenv.config()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/employees', employeeRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en: http://localhost:${PORT}`)
})
