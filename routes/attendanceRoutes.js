import {Router} from 'express'
import { AttendanceController } from '../controllers/attendanceController.js'

const attendanceRouter=Router()

attendanceRouter.get('/',AttendanceController.getAll)
attendanceRouter.get('/:id',AttendanceController.getById)
attendanceRouter.post('/',AttendanceController.create)
attendanceRouter.patch('/:id',AttendanceController.update)
attendanceRouter.delete('/:id',AttendanceController.delete)

export default attendanceRouter