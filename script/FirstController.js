angular.module("FirstApp.Controllers", []).controller("FirstController", function ($scope, Facebook) {
    $scope.names = [
        "Ahmed",
        "Tom",
        "David",
        "Jessie"
    ];

    $scope.user = Facebook.getUser(FB);
})

/**
 * Created by Bruno on 3/22/2016.
 */
