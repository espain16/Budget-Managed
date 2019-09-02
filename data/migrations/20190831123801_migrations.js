
exports.up = function(knex) {
  return knex.schema
  .createTable('users',tbl => {
     tbl.increments();
      tbl
      .string('username', 128)
      .unique()
      .notNullable()
      tbl
      .string('password', 128)
      .unique()
      .notNullable()
  })
  
  .createTable('budget', tbl => {
      tbl.increments();
      tbl
      .integer('users_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

  })

  .createTable('salary', tbl => {
      tbl.increments();
      tbl
      .decimal('income')
      tbl
      .integer('budget_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('budget')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl
      .decimal('other')

  })

  .createTable('utilities', tbl => {
      tbl.increments();
      tbl
      .decimal('phone')
      tbl
      .decimal('water')
      tbl
      .decimal('electricity')
      tbl
      .decimal('garbage')
      tbl
      .decimal('other')
      tbl
      .integer('budget_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('budget')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })

  .createTable('transportation', tbl => {
      tbl.increments();
      tbl
      .decimal('car')
      tbl
      .decimal('bus')
      tbl
      .decimal('plane')
      tbl
      .decimal('other')
      tbl
      .integer('budget_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('budget')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })

  .createTable('housing', tbl => {
      tbl.increments();
      tbl
      .decimal('rent')
      tbl
      .decimal('mortgage')
      tbl
      .decimal('other')
      tbl
      .integer('budget_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('budget')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

  })

  .createTable('food', tbl => {
      tbl.increments();
      tbl
      .decimal('groceries')
      tbl
      .decimal('restaurant')
      tbl
      .decimal('other')

      tbl
      .integer('budget_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('budget')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })

  .createTable('insurance', tbl => {
      tbl.increments();
      tbl
      .decimal('car_insurance')
      tbl
      .decimal('health_insurance')
      tbl
      .decimal('life_insurance')
      tbl
      .decimal('other')
      tbl
      .integer('budget_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('budget')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
  
};

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('budget')
  .dropTableIfExists('salary')
  .dropTableIfExists('transportation')
  .dropTableIfExists('housing')
  .dropTableIfExists('food')
  .dropTableIfExists('utilities')
  .dropTableIfExists('insurance')
};
