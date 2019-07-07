import { Router } from 'express';
import addCustomer from '../../controllers/customer';

const customerRouter = Router();

customerRouter.post('/', addCustomer);

export default customerRouter;
