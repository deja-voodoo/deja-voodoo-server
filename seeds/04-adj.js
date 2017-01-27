exports.seed = function(knex, Promise) {
  return knex.raw('delete from adj; alter sequence adj_id_seq restart with 11')
    .then(function () {
      const adjs = [{
        id: 1,
        adj: 'Violent',
      },{
        id: 2,
        adj: 'Wise',
      },{
        id: 3,
        adj: 'Agonizing',
      },{
        id: 4,
        adj: 'Ratty',
      },{
        id: 5,
        adj: 'Skillful',
      },{
        id: 6,
        adj: 'Sad',
      },{
        id: 7,
        adj: 'Round',
      },{
        id: 8,
        adj: 'Cut',
      },{
        id: 9,
        adj: 'Alcoholic',
      },{
        id: 10,
        adj: 'Scientific',
      },]
      return knex('adj').insert(adjs);
    });
};
