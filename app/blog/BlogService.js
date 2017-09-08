
var app = angular.module('myApp');


app.service('BlogService',  ['$http' , function ($http) {



    this.addBlog = function(pBlog) {

        var lPromise = $http.get('http://localhost:8080/datalake/add/1?text=huhu');
        /**
         * Created by HeimTech1 on 04.09.2017.
         */
        return lPromise;
    }

    this.loadBlogs = function() {

        var lPromise = $http.post('http://localhost:8080/blog/list');
        return lPromise;
        /**
         * Created by HeimTech1 on 04.09.2017.
         */
    }

    }]);

