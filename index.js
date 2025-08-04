import express from 'express'
import dotenv from 'dotenv'
import employeeRouter from './routes/employeRoutes.js';
import departamentRouter from './routes/departamentRoutes.js';
import positionRouter from './routes/positionRoutes.js';
import employeePositionRouter from './routes/employeePositionRoutes.js';
import attendanceRouter from './routes/attendanceRoutes.js';

const app = express()
dotenv.config()
app.use(express.json())
app.disable('x-powered-by')

const PORT = process.env.SERVER_PORT || 3000

app.use('/employees', employeeRouter);
app.use('/departments', departamentRouter);
app.use('/positions',positionRouter)
app.use('/employeePosition',employeePositionRouter)
app.use('/attendance',attendanceRouter)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en: http://localhost:${PORT}`)
})
