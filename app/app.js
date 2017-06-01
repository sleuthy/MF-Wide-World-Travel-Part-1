"use strict";
console.log("app js loaded");

var app = angular.module("WideWorldTravel", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/books.html',
		controller: "bookCtrl"
	}).
	otherwise('/');
});