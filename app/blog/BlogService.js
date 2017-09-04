
var app = angular.module('myApp');


app.service('BlogService',  '$http' , function ($http) {

    function addBlog(pBlog) {

        var lPromise = $http.put('blog/add/', pBlog);
        /**
         * Created by HeimTech1 on 04.09.2017.
         */
    }


    });

