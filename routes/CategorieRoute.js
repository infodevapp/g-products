var router = require('express').Router();
var Categorie = require('../models/CategoryModel');



//get home
  router.get('/categories' , function(req, res, next){
     Categorie.find(function(err, data){
        if(err) return next(err);
        res.json(data);
     });
  });//home pagination
  router.get('categories/page/:page' , function(req, res, next){
    res.json({hey : 'heey!'})
  });



module.exports = router;
