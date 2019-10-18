const averageService ={
  getAvg(knex, userId){
    return knex.from('reflections').select(knex.raw('AVG(reflections.physical_rating), AVG(reflections.mental_rating), users.user_name, users.id, users.full_name')).join('users', {'reflections.user_id':'users.id'}).where('users.id', userId).groupBy('users.user_name', 'users.id', 'users.full_name');
    //.avg({average_mental:'reflections.mental_rating'})
  }
};
module.exports = averageService;