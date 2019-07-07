import Redis from 'ioredis';

import db from '../models';

const { Staff } = db;
const redis = new Redis();

const confirmEmail = async (req, res) => {
  const { id } = req.params;
  const userId = await redis.get(id);

  const staffExists = await Staff.query().findById(userId);
  if (!staffExists) {
    return res.status(404).json({ status: 'error', message: 'Invalid confirmation email link' });
  }

  if (userId) {
    await Staff.query().patchAndFetchById(userId, { hasConfirmed: true });
    res.status(200).json({ status: 'success', message: 'Email Confirmation ok' });
  } else {
    res.status(400).json({ status: 'error', message: 'Invalid confirmation email link' });
  }
};

export default confirmEmail;
