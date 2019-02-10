import uuidv4 from 'uuidv4';

import db from '../models/index';
import { sendConfirmationEmail } from '../email/reservation/email';

const { Reservation } = db;

const addReservation = async (req, res) => {
  try {
    const id = uuidv4();

    const reservation = await Reservation.query()
      .eager('[ customer, room, hotel, roomTypeId ]')
      .insert({ id, ...req.body });

    const result = {
      name: `${reservation.customer.firstName} ${reservation.customer.lastName}`,
      room: reservation.room.roomNumber,
      roomType: reservation.roomTypeId.name,
      hotel: reservation.hotel.name,
      numberOfNights: req.body.numberOfNights,
      cost: reservation.roomTypeId.cost
    };

    await sendConfirmationEmail({ ...result });

    res.send('Ok');
  } catch (err) {
    console.error(err);
  }
};

export default addReservation;
