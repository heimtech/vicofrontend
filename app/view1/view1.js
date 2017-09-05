'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ '$scope', 'Blog', 'BlogService' , function($scope, Blog, BlogService) {

  $scope.blog = new Blog();
  $scope.blogs = [];

  $scope.addBlog = function() {

    var lPromise = BlogService.addBlog($scope.blog);
lPromise.then(function(answer) {
  alert(answer);
});

  }

  $scope.loadAllBlogs = function() {

    var lPromise = BlogService.loadBlogs();
    lPromise.then(function(answer) {
     $scope.blogs = answer.data;
    });

  }

}]);