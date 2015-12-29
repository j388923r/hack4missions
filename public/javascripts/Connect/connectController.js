var myApp = angular.module('myApp');

myApp.controller('connectController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

$(function() {
    $("input#tags_submit").click(function(event) {
        event.preventDefault();

        var tags = $("input#tags_input").val().split(" ");

        $.get("", tags, function(data) {
            $("div#mentor_names").html(data);
        });
    });
});
