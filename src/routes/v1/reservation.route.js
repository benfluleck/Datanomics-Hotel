import { Router } from 'express';
import addReservation from '../../controllers/reservation';

const reservationRouter = Router();

reservationRouter.post('/', addReservation);

export default reservationRouter;
