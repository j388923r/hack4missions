var myApp = angular.module('myApp');

myApp.controller('connectController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
    $scope.subsection_list = ['social media', 'culture', 'politics', 'other religions'];
     /*
    ['drawing', 'music', 'design', 'photography']
    ['moba', 'fps', 'rpg', 'casual/mobile']
    ['social media', 'culture', 'politics', 'other religions']
    */
    
    //   //Populates the dropdown with a list of mentors
    //var parameters = { tags : {} };
    // $.post('/mentors/search', parameters, function (data) {
    // });

    $('.mentor-search').chosen({width: '50%'});
    $('.mentor-search').on('change', function(data) {
        var parameters = { name: $(this).val() };
        $.post('/mentors/searchByName', parameters, function(data) {
            $('#mentor_names').html(data);
        });
    });

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

            if (tag == "creative") {
                console.log("SETTING CREATIVE");
                console.log($scope.subsection_list);
                $scope.subsection_list = ['drawing', 'music', 'design', 'photography'];
                console.log($scope.subsection_list);
            } else if (tag == "gaming") {
                $scope.subsection_list = ['moba', 'fps', 'rpg', 'casual/mobile'];
            } else if (tag == "social") {
                $scope.subsection_list = ['social media', 'culture', 'politics', 'other religions'];
            }

            console.log("sorting!");

            var tags_list = Array();
            tags_list.push(tag);

            var parameters = { "tags" : tags_list };
            console.log("parameters:" + parameters);
            $.post("/mentors/search", parameters, function(data) {
                console.log(data);
                $("div#mentor_names").html("");
                for (var index in data) {
                    $("div#mentor_names").append("<div class='mentor'>" + data[index].username + "</div>");
                }
            });
        });
    });
}]);

