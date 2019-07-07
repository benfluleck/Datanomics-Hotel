import uuidv4 from 'uuidv4';

import db from '../models';

const { Hotel } = db;

const addHotel = async (req, res) => {
  try {
    const id = uuidv4();

    await Hotel.query().insert({ id, ...req.body });

    res.send('Ok');
  } catch (err) {
    console.error(err);
  }
};

export default addHotel;
