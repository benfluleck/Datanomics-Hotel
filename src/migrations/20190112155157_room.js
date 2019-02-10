exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('room', (table) => {
      table.uuid('id').primary();
      table.string('roomNumber');
      table.uuid('roomType');
    }),
    knex.schema.createTable('roomType', (table) => {
      table.uuid('id').primary();
      table.string('name');
      table.integer('cost');
      table.integer('hotelIndex');
    }),
    knex.schema.createTable('hotel', (table) => {
      table.uuid('id').primary();
      table.string('name');
      table.string('address');
      table.integer('index');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('room'),
    knex.schema.dropTable('roomType'),
    knex.schema.dropTable('hotel')
  ]);
};
