var app = angular.module('myApp');

app.factory('Blog',  function() {
    var Blog = function() {

        this.id = "";
        this.name = "";
        this.category = "";
        this.backLinks = 0;
    };
    return Blog;
});