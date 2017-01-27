exports.up = function(knex, Promise) {
  return knex.schema.createTable('verb', (table) =>{
    table.increments();
    table.text('verb').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('verb')
};
