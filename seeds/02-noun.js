exports.seed = function(knex, Promise) {
  return knex.raw('delete from noun; alter sequence noun_id_seq restart with 11')
    .then(function () {
      const nouns = [{
        id: 1,
        noun: 'Voodoo Doll',
      },{
        id: 2,
        noun: 'School',
      },{
        id: 3,
        noun: 'Witch Doctor',
      },{
        id: 4,
        noun: 'Doll',
      },{
        id: 5,
        noun: 'Vest',
      },{
        id: 6,
        noun: 'Club',
      },{
        id: 7,
        noun: 'Night',
      },{
        id: 8,
        noun: 'Duck',
      },{
        id: 9,
        noun: 'Wave',
      },{
        id: 10,
        noun: 'Stage',
      },]
      return knex('noun').insert(nouns);
    });
};
