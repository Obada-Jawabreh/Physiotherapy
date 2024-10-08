


exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('user_id').primary(); 
      table.string('firstName').notNullable(); 
      table.string('lastName').notNullable(); 
      table.string('email').notNullable().unique(); 
      table.string('password').notNullable(); 
      table.string("phoneNumber");
      table.string('profilePicture');
      table.text('bio'); 
      table.boolean('isActive').defaultTo(true); 
      table.boolean('isApproved').defaultTo(false); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  