

var router = require('express').Router();
var Article = require('../models/ArticleModel');




  router.get('/articles' , function(req, res, next){
     Article.find(function(err, data){
        if(err) return next(err);
        res.json(data);
     });
  });

router.get('/article/:id' , function(req, res, next){
	var id = req.params.id;
	         //findById
     Article.findOne({_id : id}, function(err, data){
        if(err) return next(new Error(' Article n\'existe pas!'));
        res.json(data);
     });
  });

  router.post('/article' , function(req, res, next){
     var title = req.body.name;
     var description = req.body.description;

     // controle de saisir
     // 
     var newArticle = new Article({
     	name: title,
     	description:description,
     	category : '57f3c6cdcf446d0f40ae8d70'
     });

     newArticle.save(function(err, art){
     	if(err) return next(new Error('probleme d\'ajout d\'article!!'));
     	console.log('insertion ok :)');
     	res.json(art);
     });
  });


router.put('/article' , function(req, res, next){
     var id = req.body.id;
     var name = req.body.name;
     var description = req.body.description;
     var article = {
     	name : name,
     	description : description
     }
     // tester si l'article existe bien 
     Article.findByIdAndUpdate(id, { $set: article}, { new: true }, function (err, article) {
		  if (err) return next('erreur de modification d\'article');
		  res.json(article);
	});
});

router.delete('/article/:id' , function(req, res, next){
     var id = req.params.id;
    Article.findByIdAndRemove({_id : id}, function (err) {
		  if (err) return next('erreur de modification d\'article');
		
	});
});
module.exports = router;

