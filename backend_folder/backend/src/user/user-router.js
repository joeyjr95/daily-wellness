const express = require('express');
const userService = require('./user-service');
const userRouter = express.Router();
const bodyParser = express.json();

const serializeUser = user => ({ 
  id: user.id,
  user_name: user.user_name,
  full_name: user.physical_rating,
  password: user.password,
  nickname: user.nickname,
  date_created: user.date_created,
  date_modified: user.date_modified
});

userRouter
  .route('/:id')
  .all((req, res, next) => {
    const knexInstance = req.app.get('db');
    userService.getByName(knexInstance, req.params.id)
   
      .then(user => {
        if(!user){
          return res.status(404).json({
            error:{message: 'user doesn\'t exist'}
          });
    
        }
        res.user = user;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(serializeUser(res.user));
  })
  .delete(bodyParser,( req, res, next ) => {
  
    userService.deleteUser(
      req.app.get('db'),
      req.params.id
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  })
  .patch(bodyParser,(req, res, next) => {
    const {
      user_name,
      full_name,
      password,
      nickname} = req.body;
    const userToUpdate = {
      user_name,
      full_name,
      password,
      nickname};

    const numberOfValues = Object.values(userToUpdate).filter(Boolean).length;
    if (numberOfValues === 0)
      return res.status(400).json({
        error: {
          message: 'Request body must contain ALL REQUIRED FIELDS'
        }
      });
    userService.updateUser(
      req.app.get('db'),
      req.params.id,
      userToUpdate
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = userRouter;