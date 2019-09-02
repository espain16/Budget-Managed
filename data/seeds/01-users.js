
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password:'admin1'},
        {username: 'lisey', password:'doughnuts'},
        {username: 'jason', password:'ihateveggies'},
      ]);
    });
};
