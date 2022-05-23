let app = angular.module("hackerNewsApp", ["ngRoute"]);

app.config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/hacker-news", {
        templateUrl: "./top-story/topStoryData.html",
        controller: "hackerTopStoryData",
      })
      .when("/topStoryComments/:id", {
        templateUrl: "./top-story/comments/topStoryCommentsData.html",
        controller: "topStoryCommentsData",
      })
      .when("/new", {
        templateUrl: "./new-story/newStoryData.html",
        controller: "hackerNewStoryData",
      })
      .when("/ask", {
        templateUrl: "./ask-story/askStoryData.html",
        controller: "hackerAskStoryData",
      })
      .when("/askStoryComments/:id", {
        templateUrl: "./ask-story/comments/askStoryCommentsData.html",
        controller: "askStoryCommentsData",
      })
      .when("/show", {
        templateUrl: "./show-story/showStoryData.html",
        controller: "hackerShowStoryData",
      })
      .when("/showStoryComments/:id", {
        templateUrl: "./show-story/comments/showStoryCommentsData.html",
        controller: "showStoryCommentsData",
      })

      .otherwise("/hacker-news", {
        templateUrl: "./top-story/topStoryData.html",
        controller: "hackerTopStoryData",
      });
  },
]);

//Top Story data

app.controller("hackerTopStoryData", function ($scope, $http) {
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
            // console.log(data);

            let date = new Date(data.time * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();
            let seconds = "0" + date.getSeconds();

            if (hours) {
              if (hours === 1) {
                timeStamp = `${hours} hour ago`;
              } else {
                timeStamp = `${hours} hours ago`;
              }
            } else if (minutes !== "00") {
              if (minutes === "01") {
                timeStamp = `${minutes} minute ago`;
              } else {
                timeStamp = `${minutes} minutes ago`;
              }
            } else {
              if (seconds === "01") {
                timeStamp = `${seconds} second ago`;
              } else {
                timeStamp = `${seconds} seconds ago`;
              }
            }

            data.timeStamp = timeStamp;
            data.serialNumber = index + $scope.firstIndex + 1;

            $scope.newsDetails[index] = data;
          })
          .catch((e) => {
            console.log(e);
          });
      });
  };
});

//new story data

app.controller("hackerNewStoryData", function ($scope, $http) {
  $scope.ids = [];
  $scope.newsDetails = [];
  $scope.firstIndex = 0;
  $scope.lastIndex = 0;
  async function getIds() {
    let URL =
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";

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
            let date = new Date(data.time * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();
            let seconds = "0" + date.getSeconds();

            if (hours) {
              if (hours === 1) {
                timeStamp = `${hours} hour ago`;
              } else {
                timeStamp = `${hours} hours ago`;
              }
            } else if (minutes !== "00") {
              if (minutes === "01") {
                timeStamp = `${minutes} minute ago`;
              } else {
                timeStamp = `${minutes} minutes ago`;
              }
            } else {
              if (seconds === "01") {
                timeStamp = `${seconds} second ago`;
              } else {
                timeStamp = `${seconds} seconds ago`;
              }
            }

            data.timeStamp = timeStamp;
            data.serialNumber = index + $scope.firstIndex + 1;
            $scope.newsDetails[index] = data;
          })
          .catch((e) => {
            console.log(e);
          });
      });
  };
});

//ask data

app.controller("hackerAskStoryData", function ($scope, $http) {
  $scope.ids = [];
  $scope.newsDetails = [];
  $scope.firstIndex = 0;
  $scope.lastIndex = 0;
  async function getIds() {
    let URL =
      "https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty";

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
            let date = new Date(data.time * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();
            let seconds = "0" + date.getSeconds();

            if (hours) {
              if (hours === 1) {
                timeStamp = `${hours} hour ago`;
              } else {
                timeStamp = `${hours} hours ago`;
              }
            } else if (minutes !== "00") {
              if (minutes === "01") {
                timeStamp = `${minutes} minute ago`;
              } else {
                timeStamp = `${minutes} minutes ago`;
              }
            } else {
              if (seconds === "01") {
                timeStamp = `${seconds} second ago`;
              } else {
                timeStamp = `${seconds} seconds ago`;
              }
            }

            data.timeStamp = timeStamp;
            data.serialNumber = index + $scope.firstIndex + 1;
            $scope.newsDetails[index] = data;
          })
          .catch((e) => {
            console.log(e);
          });
      });
  };
});

//show data

app.controller("hackerShowStoryData", function ($scope, $http) {
  $scope.ids = [];
  $scope.newsDetails = [];
  $scope.firstIndex = 0;
  $scope.lastIndex = 0;
  async function getIds() {
    let URL =
      "https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty";

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
            let date = new Date(data.time * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();
            let seconds = "0" + date.getSeconds();

            if (hours) {
              if (hours === 1) {
                timeStamp = `${hours} hour ago`;
              } else {
                timeStamp = `${hours} hours ago`;
              }
            } else if (minutes !== "00") {
              if (minutes === "01") {
                timeStamp = `${minutes} minute ago`;
              } else {
                timeStamp = `${minutes} minutes ago`;
              }
            } else {
              if (seconds === "01") {
                timeStamp = `${seconds} second ago`;
              } else {
                timeStamp = `${seconds} seconds ago`;
              }
            }

            data.timeStamp = timeStamp;
            data.serialNumber = index + $scope.firstIndex + 1;
            $scope.newsDetails[index] = data;
          })
          .catch((e) => {
            console.log(e);
          });
      });
  };
});

//top story comments data

app.controller("topStoryCommentsData", function ($scope, $http, $routeParams) {
  $scope.comments = [];

  const URL = `https://hacker-news.firebaseio.com/v0/item/${$routeParams.id}.json?print=pretty`;

  //making a request to the api

  $http.get(URL).then((response) => {
    $scope.ids = response.data;
    $scope.kids = response.data.kids;

    console.log(response);
    console.log($scope.kids);
    $scope.kids.forEach((id, index) => {
      $http
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
        .then((res) => {
          $scope.comments[index] = res.data;
        });
    });
  });
});

//ask story comments data

app.controller("askStoryCommentsData", function ($scope, $http, $routeParams) {
  $scope.comments = [];

  const URL = `https://hacker-news.firebaseio.com/v0/item/${$routeParams.id}.json?print=pretty`;

  //making a request to the api

  $http.get(URL).then((response) => {
    $scope.ids = response.data;
    $scope.kids = response.data.kids;

    console.log(response);
    console.log($scope.kids);
    $scope.kids.forEach((id, index) => {
      $http
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
        .then((res) => {
          $scope.comments[index] = res.data;
        });
    });
  });
});

//show story comments data

app.controller("showStoryCommentsData", function ($scope, $http, $routeParams) {
  $scope.comments = [];

  const URL = `https://hacker-news.firebaseio.com/v0/item/${$routeParams.id}.json?print=pretty`;

  //making a request to the api

  $http.get(URL).then((response) => {
    $scope.ids = response.data;
    $scope.kids = response.data.kids;

    console.log(response);
    console.log($scope.kids);
    $scope.kids.forEach((id, index) => {
      $http
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
        .then((res) => {
          $scope.comments[index] = res.data;
        });
    });
  });
});
