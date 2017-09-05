
var app = angular.module('myApp');


app.service('BlogServiceTest', function(){
    this.users = ['John', 'James', 'Jake'];
    t
    his.addBlog = function(pBlog) {

        var lPromise = $http.post('blog/add/', pBlog);
        /**
         * Created by HeimTech1 on 04.09.2017.
         */
    }
});