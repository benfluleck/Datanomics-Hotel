import { Router } from 'express';
import { signup, signin } from '../controllers/auth';
import checkFields from '../validators/checkFields';
import { ensureSignedOut } from '../middleware/checkSession';

export const authRouter = Router();

authRouter.post('/signin', checkFields, ensureSignedOut, signin);

authRouter.post('/signup', checkFields, ensureSignedOut, signup);
