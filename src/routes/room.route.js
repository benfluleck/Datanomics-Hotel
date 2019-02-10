import { Router } from 'express';
import addRoom from '../controllers/room';

export const roomRouter = Router();

roomRouter.post('/', addRoom);
