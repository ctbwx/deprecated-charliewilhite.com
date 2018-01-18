// eslint-disable-next-line
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('test', (table) => {
      table.increments('id').primary();
      table.string('test');
    }),
  ]);
};

// eslint-disable-next-line
exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('test'),
  ]);
};
