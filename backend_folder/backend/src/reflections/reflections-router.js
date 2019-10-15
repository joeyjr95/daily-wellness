const path = require('path');
const express = require('express');
const xss = require('xss');
const logger = require('../logger');
const reflectionsService = require('./reflections-service');
const reflectionsRouter = express.Router();

const serializeReflection = reflection => ({ 
  id: reflection.id,
  user_id: reflection.user_id,
  physical_rating: reflection.physical_rating,
  physical_content: xss(reflection.physical_content),
  mental_rating: reflection.mental_rating,
  mental_content: xss(reflection.mental_content),
  date_created: reflection.date_added
});

reflectionsRouter
  .route('/')
  .get((req,res,next)=> {
    const knexInstance = req.app.get('db');
    reflectionsService.getAllReflections(knexInstance)
      .then(reflections => {
        console.log(reflections);
        res.json(reflections.map(serializeReflection));
      })
      .catch(next);
  })
  .post((req, res, next) => {
    const { physical_rating,
      physical_content,
      mental_rating,
      mental_content, 
    } = req.body;
    const newReflection = {
      physical_rating,
      physical_content,
      mental_rating,
      mental_content,
    };
    for (const [key, value] of Object.entries(newReflection)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        });
      }
    }
    reflectionsService.insertReflections(
      req.app.get('db'),
      newReflection
    )
      .then(reflection => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl + `/${reflection.id}`))
          .json(reflection);
      })
      .catch(next);
  
    logger.info('REFLECTION was created');
  });
reflectionsRouter
  .route('/:id')
  .all((req, res, next) => {
    const knexInstance = req.app.get('db');
    reflectionsService.getById(knexInstance, req.params.id)
   
      .then(reflection => {
        if(!reflection){
          return res.status(404).json({
            error:{message: 'reflection doesn\'t exist'}
          });
    
        }
        res.reflection = reflection;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(serializeReflection(res.reflection));
  })
  .delete(( req, res, next ) => {
  
    reflectionsService.deleteReflection(
      req.app.get('db'),
      req.params.id
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  })
  .patch((req, res, next) => {
    const {
      physical_rating,
      physical_content,
      mental_rating,
      mental_content,} = req.body;
    const reflectionToUpdate = {
      physical_rating,
      physical_content,
      mental_rating,
      mental_content,};

    const numberOfValues = Object.values(reflectionToUpdate).filter(Boolean).length;
    if (numberOfValues === 0)
      return res.status(400).json({
        error: {
          message: 'Request body must contain ALL REQUIRED FIELDS'
        }
      });
    reflectionsService.updateReflection(
      req.app.get('db'),
      req.params.id,
      reflectionToUpdate
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = reflectionsRouter;