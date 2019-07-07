import uuidv4 from 'uuidv4';

import db from '../models';

const { RoomType } = db;

const addRoomType = async (req, res) => {
  try {
    console.log(req.body, '>>>>>>>>>>');

    const id = uuidv4();

    await RoomType.query().insert({ id, ...req.body });

    res.send('Ok');
  } catch (err) {
    console.error(err);
  }
};

export default addRoomType;
