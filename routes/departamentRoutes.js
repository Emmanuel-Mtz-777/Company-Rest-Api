import {Router} from 'express';
import  {DepartmentController} from '../controllers/departmentController.js';

const departmentRouter = Router();

departmentRouter.get('/', DepartmentController.getAll);
departmentRouter.get('/:id', DepartmentController.getById);
departmentRouter.post('/', DepartmentController.create);
departmentRouter.put('/:id',DepartmentController.update);
departmentRouter.delete('/:id', DepartmentController.delete);


export default departmentRouter;
