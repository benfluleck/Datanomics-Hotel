exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('customer', (table) => {
      table.uuid('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.index(['firstName', 'lastName'], 'customerIndex');
      table.string('address');
      table.string('nextOfKinFirstName');
      table.string('nextOfKinLastName');
      table.string('nextOfKinAddress');
      table.string('email').unique();
      table.string('phone').unique();
      table.string('driversLiciense');
      table.string('passport');
      table.string('complaints');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('reservation', (table) => {
      table.uuid('id').primary();
      table
        .uuid('customerId')
        .notNullable()
        .references('id')
        .inTable('customer')
        .onDelete('CASCADE');
      table.integer('hotelIndex');
      table.uuid('roomType');
      table.uuid('roomId');
      table.integer('numberOfNights');
      table.integer('amountPaid');
      table.integer('additionalGuests');
      table.datetime('checkInTime');
      table.datetime('checkOutTime');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([knex.schema.dropTable('customer'), knex.schema.dropTable('reservation')]);
};
