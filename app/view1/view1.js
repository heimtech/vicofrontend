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

  $scope.addBlog = function() {

    var lPromise = BlogService.addBlog(blog);


  }

}]);