import sgMail from '@sendgrid/mail';

import { emailGenerated, mailGenerator } from './config';

const emailBody = (name, room, roomType, hotel, numberOfNights, cost) => mailGenerator.generate(emailGenerated(name, room, roomType, hotel, numberOfNights, cost));

const emailText = (name, room, roomType, hotel, numberOfNights, cost) => mailGenerator.generatePlaintext(emailGenerated(name, room, roomType, hotel, numberOfNights, cost));

export const sendConfirmationEmail = async ({
  name,
  room,
  roomType,
  hotel,
  numberOfNights,
  cost
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'skogidan@yahoo.com',
    from: 'payment@datanomics.com',
    subject: 'Reservation - Receipt',
    text: emailText(name, room, roomType, hotel, numberOfNights, cost),
    html: emailBody(name, room, roomType, hotel, numberOfNights, cost)
  };

  await sgMail.send(msg);
};
