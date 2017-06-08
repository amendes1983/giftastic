
//Array of super cool games!!!!
var games = ["Halo 4", "Battlefield One", "Destiny", "Pokemon","Warcraft", "Mario Bros.", "Starcraft", "Overwatch", "Minecraft" ];


$(document).ready(function makeButton(){
//Function that will create buttons for games
  $("#buttons").empty();
    for (var i = 0; i < games.length; i++) {
        var buttons = games;
        $('#buttons').append('<button data-game='+ games[i] + ">" + games[i] + '</button>');

  }
console.log(buttons)



//function to call Giphy and get gifs for specific games
$("button").on("click", function() {
  var game = $(this).attr("data-game");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    game + "&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var gameImage = $("<img>");
        gameImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(gameImage);

        $("#gifs").prepend(gifDiv);
      }
    });
    $("#add-games").on("click", function(event) {
            event.preventDefault();
            $("#buttons").empty();
            var game = $("#game-input").val().trim();

            games.push(game);
            makeButton();
          });

      });
  });
