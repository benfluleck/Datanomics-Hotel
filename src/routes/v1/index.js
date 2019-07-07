import express from 'express';

import authRouter from './auth.route';
import customerRouter from './customer.route';
import hotelRouter from './hotel.route';
import roomTypeRouter from './roomType.route';
import roomRouter from './room.route';
import reservationRouter from './reservation.route';
import emailRouter from './email.route';


const indexRouter = express.Router();


indexRouter.use('/confirm', emailRouter);
indexRouter.use('/auth', authRouter);
indexRouter.use('/customer', customerRouter);
indexRouter.use('/hotel', hotelRouter);
indexRouter.use('/room-type', roomTypeRouter);
indexRouter.use('/room', roomRouter);
indexRouter.use('/reservation', reservationRouter);

export default indexRouter;
