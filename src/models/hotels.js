/* eslint-disable import/no-cycle */
import Model from './config';
import RoomType from './roomType';

class Hotel extends Model {
  static get tableName() {
    return 'hotel';
  }

  static get relationMappings() {
    return {
      hotel: {
        relation: Model.BelongsToOneRelation,
        modelClass: RoomType,
        join: {
          from: 'hotel.index',
          to: 'roomType.hotelIndex'
        }
      }
    };
  }
}

export default Hotel;
