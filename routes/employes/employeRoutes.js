import {Router} from 'express';

const employeeRouter = Router();

employeeRouter.get('/', (req, res) => {
    res.send('employees');
});

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
