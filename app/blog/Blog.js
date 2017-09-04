var app = angular.module('myApp');

app.factory('Blog', [ function() {
    function Blog() {

        this.id = "";
        this.name = "";
        this.category = "";
        this.backlinks = 0;
    };
    return Blog;
}]);