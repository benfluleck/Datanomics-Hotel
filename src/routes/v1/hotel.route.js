import { Router } from 'express';
import addHotel from '../../controllers/hotel';

const hotelRouter = Router();

hotelRouter.post('/', addHotel);

export default hotelRouter;
