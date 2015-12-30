var myApp = angular.module('myApp');

myApp.controller('connectController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';

    $(function() {
        console.log("loaded");

        $("input#tags_submit").click(function(event) {
            console.log("searching!");
            event.preventDefault();

            console.log("searching!");

            var tags_list = $("input#tags_input").val().split(" ");
            var parameters = { tags : tags_list };

            console.log(tags_list);

            $.post("/search", parameters, function(data) {
                $("div#mentor_names").html(data);
            });
        });

        $("a.primaryTagButton").click(function(event) {
            event.preventDefault();

            var id = $(this).attr("id");
            console.log("id: " + id);
            var tag = id.substring(0, id.length - 3);

            console.log("sorting!");

            var parameters = { tags : {tag} };
            console.log("parameters:" + parameters);
            $.post("/mentors/search", parameters, function(data) {
                console.log(data);
                $("div#mentor_names").html(data);
            });
        });
    });
}]);

