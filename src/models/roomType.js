import Model from './config';
import Room from './room';
import Hotel from './hotels';
import Reservation from './reservation';

class RoomType extends Model {
  static get tableName() {
    return 'roomType';
  }

  static get relationMappings() {
    return {
      roomType: {
        relation: Model.HasManyRelation,
        modelClass: Room,
        join: {
          from: 'roomType.id',
          to: 'room.roomType'
        }
      },
      hotel: {
        relation: Model.HasOneRelation,
        modelClass: Hotel,
        join: {
          from: 'roomType.hotelIndex',
          to: 'hotel.index'
        }
      },
      reservation: {
        relation: Model.HasOneRelation,
        modelClass: Reservation,
        join: {
          from: 'roomType.id',
          to: 'reservation.roomType'
        }
      }
    };
  }
}

export default RoomType;
