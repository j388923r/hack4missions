var myApp = angular.module('myApp');

myApp.controller('connectController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';

  $('.mentor-search').chosen();
}]);

$(function() {
    console.log("loaded");

    $("input#tags_submit").click(function(event) {
        event.preventDefault();

        console.log("searching!");

        var tags_list = $("input#tags_input").val().split(" ");
        var parameters = { tags : tags_list };

        console.log(tags_list);

        $.post("/search", parameters, function(data) {
            $("div#mentor_names").html(data);
        });
    });
});
