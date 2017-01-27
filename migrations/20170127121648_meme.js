exports.up = function(knex, Promise) {
  return knex.schema.createTable('meme', (table) =>{
    table.increments();
    table.text('img_url').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('meme')
};
