"use strict";

app.controller("bookCtrl", function($scope, guideFactory){

	guideFactory.getBooks()
	.then(function(itemCollection){
		$scope.guides = itemCollection;
		console.log("guides", $scope.guides);
	});
});