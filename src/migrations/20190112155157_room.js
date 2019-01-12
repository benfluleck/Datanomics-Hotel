
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('room', (table) => {
      table.uuid('id').primary();
      table.string('roomNumber');
      table.uuid('roomTypeId').notNullable().references('id').inTable('roomType');
    }),
    knex.schema.createTable('roomType', (table) => {
      table.uuid('id').primary();
      table.string('name');
      table.string('cost');
      table.uuid('hotelId').notNullable().references('id').inTable('hotel');
    }),
    knex.schema.createTable('hotels', (table) => {
      table.uuid('id').primary();
      table.string('name');
      table.string('address');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('room'),
    knex.schema.dropTable('roomType'),
    knex.schema.dropTable('hotels'),
  ])
};
