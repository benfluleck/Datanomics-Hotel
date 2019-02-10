import { Router } from 'express';
import addHotel from '../controllers/hotel';

export const hotelRouter = Router();

hotelRouter.post('/', addHotel);
