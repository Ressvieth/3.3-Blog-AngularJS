(function() {

var blogControllers = angular.module("blog.controllers", []);

	blogControllers.controller("BlogController", ["$scope", "$timeout", "BlogService", function($scope, $timeout, BlogService) {
		
		BlogService.loadPosts()
			.then(function(response) {
				$scope.posts = response.data;
				$scope.no_of_posts = response.data.length;
				$scope.postsHasLoaded = true;
			});

		$scope.limit = 15;
		$scope.offset = 0;
		$scope.loading = false;

		$scope.loadMorePosts = function() {
			$scope.loading = true;
			$timeout(function() {
				$scope.loading = false;
				$scope.limit += 15;
			},	700);
		};


	}]);

	blogControllers.controller("PostController", ["$scope", "$routeParams", "BlogService", function($scope, $routeParams, BlogService) {
		
		BlogService.loadPost($routeParams.id)
			.then(function(response) {
				$scope.post = response.data;
				$scope.postLoaded = true;
			});

		

	}]);

})();