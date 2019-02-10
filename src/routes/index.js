import { Router } from 'express';

import { authRouter } from './auth.route';
import { customerRouter } from './customer.route';
import { hotelRouter } from './hotel.route';
import { roomTypeRouter } from './roomType.route';
import { roomRouter } from './room.route';
import { reservationRouter } from './reservation.route';

export const indexRouter = Router();

indexRouter
  .route('/')
  .get((req, res) => res.status(200).json({ message: 'Welome to the API end-points' }));

indexRouter.use('/auth', authRouter);
indexRouter.use('/customer', customerRouter);
indexRouter.use('/hotel', hotelRouter);
indexRouter.use('/room-type', roomTypeRouter);
indexRouter.use('/room', roomRouter);
indexRouter.use('/reservation', reservationRouter);
