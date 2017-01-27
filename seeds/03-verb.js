exports.seed = function(knex, Promise) {
  return knex.raw('delete from verb; alter sequence verb_id_seq restart with 11')
    .then(function () {
      const verbs = [{
        id: 1,
        verb: 'Run',
      },{
        id: 2,
        verb: 'Stab',
      },{
        id: 3,
        verb: 'Eat',
      },{
        id: 4,
        verb: 'Walk',
      },{
        id: 5,
        verb: 'Cry',
      },{
        id: 6,
        verb: 'Fly',
      },{
        id: 7,
        verb: 'Murder',
      },{
        id: 8,
        verb: 'Remember',
      },{
        id: 9,
        verb: 'Command',
      },{
        id: 10,
        verb: 'Doubt',
      },]
      return knex('verb').insert(verbs);
    });
};
