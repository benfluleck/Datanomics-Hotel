import Mailgen from 'mailgen';

export const mailGenerator = new Mailgen({
  theme: 'salted',
  product: {
    name: 'DATANOMICS HOTELS',
    link: '#'
  }
});

export const emailGenerated = (name, room, roomType, hotel, numberOfNights, cost) => ({
  body: {
    name: `${name}`,
    intro: 'Your order has been processed successfully.',
    table: {
      data: [
        {
          Room: `${room}`,
          RoomType: `${roomType}`,
          Nights: `${numberOfNights}`,
          Location: `${hotel}`,
          price: `${cost}`
        }
      ],
      columns: {
        customWidth: {
          price: '10%'
        },
        customAlignment: {
          price: 'right'
        }
      }
    },
    outro: 'We thank you for being a good customer.'
  }
});
