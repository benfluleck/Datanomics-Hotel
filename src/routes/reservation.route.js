import { Router } from 'express';
import addReservation from '../controllers/reservation';

export const reservationRouter = Router();

reservationRouter.post('/', addReservation);
