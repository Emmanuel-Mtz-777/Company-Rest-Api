import {Router} from 'express';
import  {EmployeeController} from '../controllers/employeesController.js';

const employeeRouter = Router();

employeeRouter.get('/', EmployeeController.getAll);
employeeRouter.get('/:id', EmployeeController.getById);
employeeRouter.post('/', EmployeeController.create);


employeeRouter.put('/:id',EmployeeController.update);

employeeRouter.patch('/:id',EmployeeController.patch );


employeeRouter.delete('/:id', EmployeeController.delete);


export default employeeRouter;
