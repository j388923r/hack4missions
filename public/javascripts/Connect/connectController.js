var myApp = angular.module('myApp');

myApp.controller('connectController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  
  //Get List of users and add to mentor list
  $.get('/', function (data) {
    console.log(data);
    $.each(data, function (i, mentor) {
        $('.mentor-search').append($('<option>', {
            value: 'mentor',
            text: 'mentor-text'
        }));
    });
  });
  // $.each(items, function (i, item) {
  //   $('#mySelect').append($('<option>', { 
  //       value: item.value,
  //       text : item.text 
  //   }));
  // });

  $('.mentor-search').chosen({width: '50%'});
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
