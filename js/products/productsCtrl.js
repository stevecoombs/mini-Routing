var app = angular.module('miniRouting');

app.controller('productsCtrl', function($scope, $routeParams, productsService){
	if($routParams.id === 'shoes'){
		$scope.productData = productsService.shoeData;
	} else if($routParams.id === 'socks'){
		$scope.productData = productsService.sockData
	}
});