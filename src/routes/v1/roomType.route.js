import { Router } from 'express';

import addRoomType from '../../controllers/roomType';

const roomTypeRouter = Router();

roomTypeRouter.post('/', addRoomType);

export default roomTypeRouter;
