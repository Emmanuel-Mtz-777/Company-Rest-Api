import {Router} from 'express';
import  {EmployeePositionController} from '../controllers/employeePositionController.js';

const employeePositionRouter = Router();

employeePositionRouter.get('/', EmployeePositionController.getAll);
employeePositionRouter.get('/:id', EmployeePositionController.getById);
employeePositionRouter.post('/', EmployeePositionController.create);
employeePositionRouter.patch('/:id',EmployeePositionController.update);
employeePositionRouter.delete('/:id', EmployeePositionController.delete);


export default employeePositionRouter;
