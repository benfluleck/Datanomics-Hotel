import { Router } from 'express';
import addRoom from '../../controllers/room';

const roomRouter = Router();

roomRouter.post('/', addRoom);

export default roomRouter;
