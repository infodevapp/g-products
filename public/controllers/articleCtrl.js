
app.controller('ArticlesCtrl', ['$scope', '$http','$location', '$routeParams', function($scope, $http, $location, $routeParams){
		/**
		 * get the list of articles
		 */
		$http.get('/articles').success(function(data){
			$scope.articles = data;
			$scope.showAdd = true;
			$scope.showedit = false;
		});

		$scope.showadd = function(){
			$scope.edtitle = '';
			$scope.eddescription = '';
			$scope.showAdd = true;
			$scope.showedit = false;
		}
		/**
		 * creer un nouveau article
		 */
		$scope.newArticle = function(){
			var data = {
			name : $scope.title,
			description : $scope.description
			}
			$http.post('/article', data).success(function(data, status){
				console.log(status);				
			});
			    $scope.title = '';
				$scope.description ='';
				$location.path('/articles');
			
		}
		/**
		 * change form for update an article
		 */
		$scope.editArticle = function(article){

			$http.get('/article/'+article._id).success(function(data){
				$scope.showAdd = false;
				$scope.showedit = true;
				$scope.edarticle = article;
			});
		}
		/**
		 * updating an existing article
		 */
		$scope.updateArticle = function(){
			var data = {
					id :   $scope.edarticle._id,
					name : $scope.edarticle.name,
					description : $scope.edarticle.description
				}
			$http.put('/article', data).success(function(data, status){
				console.log(status);
			});
			//$scope.edarticle.name = '';
			//$scope.edarticle.description = '';
			$location.path('/articles');
			//$location.hash(data.id);
		}
		/**
		 * updating an existing article
		 */
		$scope.removeArticle = function(article){
			var id = article._id;
				console.log(id);
            $http.delete('/article/' + id)
	            .success(function (data, status, headers) {
	                console.log(status);
	            })
	            .error(function (data, status, header, config) {
	                console.log(status);
	            });
			//$scope.edarticle.name = '';
			//$scope.edarticle.description = '';
			$location.path('/articles');
			//$location.hash(data.id);
		}
		
		
}]).controller('ArticleCtrl', function($scope, $http, $routeParams){
		/**
		 * get one article by id
		 */
		$http.get('/article/'+$routeParams.id).success(function(data){
			console.log(data);
			$scope.art = data;
		});
})