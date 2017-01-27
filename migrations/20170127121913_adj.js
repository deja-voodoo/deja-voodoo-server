exports.up = function(knex, Promise) {
  return knex.schema.createTable('adj', (table) =>{
    table.increments();
    table.text('adj').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('adj')
};
