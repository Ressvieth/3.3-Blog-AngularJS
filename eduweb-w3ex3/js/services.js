(function() {

var blogServices = angular.module("blog.services", []);

blogServices.factory("BlogService", ["$http", "API_URL", function ($http, API_URL) {  

	function getPosts() {
		return $http.get(API_URL);
	}
	
	function getPost(post_id) {
		return $http.get(API_URL+"/"+post_id);
	}

	return {
		loadPosts: getPosts,
		loadPost: getPost
	};

}]);


})();