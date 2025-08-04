import {Router} from 'express';
import { PositionController } from "../controllers/positionsController.js";

const positionRouter=Router()

positionRouter.get('/',PositionController.getAll)
positionRouter.get('/:id',PositionController.getByid)
positionRouter.post('/',PositionController.create)
positionRouter.patch('/:id',PositionController.update)
positionRouter.delete('/:id',PositionController.delete)

export default positionRouter