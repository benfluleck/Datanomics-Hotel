import Model from './config';

class Customer extends Model {
  static get tableName() {
    return 'customer';
  }
}

export default Customer;
