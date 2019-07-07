import express from 'express';
import indexRouter from './v1';


const router = express.Router();

router.use('/api/v1', indexRouter);
router.get('/', (req, res) => res.status(200).json({ message: 'Welome to the API end-points' }));

export default router;
