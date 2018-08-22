var movie = "frozen";
var queryURL = "https://www.omdbapi.com/?s=" + movie + "&y=&plot=short&apikey=trilogy";

$.ajax({url: queryURL, method: "GET"}).then(function(response){
    console.log(response);
    response.Search.forEach(function(element){
        var img = $("<img>");
        var imgHolder = $("<div>");
        imgHolder.addClass("imgHolder");
        imgHolder.append(img);
        img.attr("src", element.Poster);

        var movieInfo = $("<div>");
        movieInfo.addClass("movieInfo");
        movieInfo.append(movieTitle);

        var movieTitle = $("<h3>");
        movieTitle.text(element.Title);
        movieInfo.append(movieTitle);

        var moviePlot = $("<p>");
        moviePlot.text(element.Plot);
        movieInfo.append(moviePlot);

        var movieYear = $("<h2>");
        movieYear.text(element.Year);
        movieInfo.append(movieYear);

        movieInfo.append(movieTitle);
        imgHolder.append(movieInfo);
        $("#movie-viewer").append(imgHolder);
    }
});

function displaySearch(){
    $.ajax({url: queryURL, method: "GET"}).then(function(response){
    console.log(response);
    response.Search.forEach(function(element){
        
    }
}
}