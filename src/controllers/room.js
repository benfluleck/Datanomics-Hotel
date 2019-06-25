import uuidv4 from 'uuidv4';

import db from '../models/index';

const { Room } = db;

const addRoom = async (req, res) => {
  try {
    console.log(req.body, '>>>>>>>>>>');

    const id = uuidv4();

    await Room.query().insert({ id, ...req.body });

    res.send('Ok');
  } catch (err) {
    console.error(err);
  }
};

export default addRoom;
