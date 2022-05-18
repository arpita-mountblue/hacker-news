let app = angular.module("hackerNewsApp", ["ngRoute"]);

app.config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/hacker-news", {
        templateUrl: "./top-story/topStoryData.html",
        controller: "hackerNewsData",
      })

      .otherwise("/hacker-news", {
        templateUrl: "./top-story/topStoryData.html",
        controller: "hackerNewsData",
      });
  },
]);

app.controller("hackerNewsData", function ($scope, $http) {
  $scope.ids = [];
  $scope.newsDetails = [];
  $scope.firstIndex = 0;
  $scope.lastIndex = 0;
  async function getIds() {
    let URL =
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

    const response = await $http.get(URL);

    $scope.ids = response.data;
    $scope.moreItem();
  }

  getIds();

  $scope.moreItem = () => {
    $scope.firstIndex = $scope.lastIndex;
    $scope.lastIndex += 30;

    $scope.ids
      .slice($scope.firstIndex, $scope.lastIndex)
      .forEach((id, index) => {
        $http
          .get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          )
          .then((res) => {
            let data = res.data;
            data.serialNumber = index + $scope.firstIndex + 1;
            $scope.newsDetails[index] = data;
          })
          .catch((e) => {
            console.log(e);
          });
      });
  };
});
