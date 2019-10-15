const reflectionsService = {
  getAllReflections(knex) {
    return knex.select('*').from('reflections');
  },
  insertReflections(knex, newReflection) {
    return knex
      .insert(newReflection)
      .into('reflections')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.from('reflections').select('*').where('id', id).first();
  },
  deleteReflection(knex, id) {
    return knex('reflections')
      .where({ id })
      .delete();
  },
  updateReflection(knex, id, newReflectionFields) {
    return knex('reflections')
      .update(newReflectionFields)
      .where({ id });
          
  }
        
        
};
        
module.exports = reflectionsService;