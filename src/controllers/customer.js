import uuidv4 from 'uuidv4';

import db from '../models/index';

const { Customer } = db;

const addCustomer = async (req, res) => {
  try {
    const id = uuidv4();

    await Customer.query().insert({ id, ...req.body });

    res.send('Ok');
  } catch (err) {
    console.error(err);
  }
};

export default addCustomer;
