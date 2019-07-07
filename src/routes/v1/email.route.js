import { Router } from 'express';
import confirmEmail from '../../controllers/confirmEmail';

const emailRouter = Router();

emailRouter.get('/:id', confirmEmail);

export default emailRouter;
