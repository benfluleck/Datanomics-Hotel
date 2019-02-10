import { compare } from 'bcryptjs';
import Staff from '../models/staff';

export const attemptSignIn = async (email, password) => {
  const message = 'Wrong credentials Please log in';

  const staff = await Staff.query().findOne({ email });

  if (!staff) {
    throw new Error(message);
  }

  if (!(await compare(password, staff.password))) {
    throw new Error(message);
  }
  return staff;
};

export const userSignOut = (req, res) => new Promise((resolve, reject) => {
  req.session.destroy((err) => {
    if (err) reject(err);
    res.clearCookie(process.env.SESS_NAME);
    resolve(true);
  });
});
