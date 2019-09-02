
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('budget').del()
    .then(function () {
      // Inserts seed entries
      return knex('budget').insert([
        {id: 1, users_id: 1},
        {id: 2, users_id: 2},
        {id: 3, users_id: 3}
      ]);
    });
};
