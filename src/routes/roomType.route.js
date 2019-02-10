import { Router } from 'express';

import addRoomType from '../controllers/roomType';

export const roomTypeRouter = Router();
roomTypeRouter.post('/', addRoomType);
