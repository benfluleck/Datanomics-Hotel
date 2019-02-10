import Model from './config';
import Hotel from './hotels';
import Customer from './customer';
import Room from './room';
import RoomType from './roomType';

class Reservation extends Model {
  static get tableName() {
    return 'reservation';
  }

  static get relationMappings() {
    return {
      customer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Customer,
        join: {
          from: 'reservation.customerId',
          to: 'customer.id'
        }
      },
      room: {
        relation: Model.BelongsToOneRelation,
        modelClass: Room,
        join: {
          from: 'reservation.roomId',
          to: 'room.id'
        }
      },
      roomTypeId: {
        relation: Model.BelongsToOneRelation,
        modelClass: RoomType,
        join: {
          from: 'reservation.roomType',
          to: 'roomType.id'
        }
      },
      hotel: {
        relation: Model.HasOneRelation,
        modelClass: Hotel,
        join: {
          from: 'reservation.hotelIndex',
          to: 'hotel.index'
        }
      }
    };
  }
}

export default Reservation;
