exports.up = function(knex, Promise) {
  return knex.schema.createTable('noun', (table) =>{
    table.increments();
    table.text('noun').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('noun')
};
