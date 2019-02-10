import { Router } from 'express';
import addCustomer from '../controllers/customer';

export const customerRouter = Router();

customerRouter.post('/', addCustomer);
