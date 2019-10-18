const express = require('express');
const averageService = require('./average-service');
const {requireAuth} = require('../middleware/jwt-auth');
const averageRouter = express.Router();

averageRouter
  .route('/')
  .all(requireAuth)
  .get((req,res,next)=> {
    const knexInstance = req.app.get('db');
    const userId = req.user.id;
    averageService.getAvg(knexInstance, userId)
      .then(average => {
        res.json(average);
      })
      .catch(next);
  });

module.exports = averageRouter;