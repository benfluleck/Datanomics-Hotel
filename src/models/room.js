/* eslint-disable import/no-cycle */
import Model from './config';
import RoomType from './roomType';

class Room extends Model {
  static get tableName() {
    return 'room';
  }

  static get relationMappings() {
    return {
      room: {
        relation: Model.HasManyRelation,
        modelClass: RoomType,
        join: {
          from: 'room.roomType',
          to: 'roomType.id'
        }
      }
    };
  }
}

export default Room;
