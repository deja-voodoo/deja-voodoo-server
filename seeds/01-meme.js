exports.seed = function(knex, Promise) {
  return knex.raw('delete from meme; alter sequence meme_id_seq restart with 11')
    .then(function () {
      const memes = [{
        id: 1,
        img_url: 'http://vignette4.wikia.nocookie.net/steven-universe/images/f/fe/Deja_vu_meme.jpg/revision/latest?cb=20150812201609'
      },{
        id: 2,
        img_url: 'http://s2.quickmeme.com/img/b8/b82cd5cb8067ef6396b2d5f0a4d10377a99ee30566496d96cd7766c72f38ce15.jpg'
      },{
        id: 3,
        img_url: 'http://s2.quickmeme.com/img/41/41a754712eb5feba7738bd521813a48fb6334242fdfc2b9786145ad8cbd34185.jpg'
      },{
        id: 4,
        img_url: 'https://i.imgflip.com/xcg73.jpg'
      },{
        id: 5,
        img_url: 'http://www.funnymeme.com//wp-content/uploads/2014/08/Funny-memes-what-if-deja-vu-meants-640x627.png'
      },{
        id: 6,
        img_url: 'http://img-comment-fun.9cache.com/media/ab6vEKv/aGjJeMGR_700w_0.jpg'
      },{
        id: 7,
        img_url: 'https://i.imgflip.com/vspvw.jpg'
      },{
        id: 8,
        img_url: 'http://img.memecdn.com/deja-vu-theory_c_2898803.webp'
      },{
        id: 9,
        img_url: 'https://i.imgflip.com/i3rnq.jpg'
      },{
        id: 10,
        img_url: 'https://i.imgflip.com/lexsu.jpg'
      },]
      return knex('meme').insert(memes);
    });
};
