const userService = {
  
  getByName(knex, id) {
    return knex.from('users').select('*').where('id', id).first();
  },
  deleteUser(knex, id) {
    return knex('users')
      .where({ id })
      .delete();
  },
  updateUser(knex, id, newUserFields) {
    return knex('users')
      .update(newUserFields)
      .where({ id });
            
  }
          
          
};
          
module.exports = userService;