// eslint-disable-next-line
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('blogs', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('teaser', 999999);
      table.string('body', 999999);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
  ]);
};

// eslint-disable-next-line
exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('test'),
  ]);
};
