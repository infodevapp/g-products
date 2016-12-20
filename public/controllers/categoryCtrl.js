



app.controller('CategoryCtrl', function($scope, $http){

	$http.get('/categories').success(function(data){
		$scope.categories = data;
	});
});