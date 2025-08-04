import {Router} from 'express';
import  {EmployeeController} from '../controllers/employeesController.js';

const employeeRouter = Router();

employeeRouter.get('/', EmployeeController.getAll);

employeeRouter.post('/', (req, res) => {
    res.send('create employee');
});


employeeRouter.put('/', (req, res) => {
    res.send('update employee');
});

employeeRouter.patch('/', (req, res) => {
    res.send('Change data employee');
});

employeeRouter.delete('/', (req, res) => {
    res.send('delete employee');
});


export default employeeRouter;
