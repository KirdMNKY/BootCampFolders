var title = "space+jam";
var queryURL = "https://omdbapi.com/?apikey=trilogy&s=" + title + "&plot=short";

var queryURL2 = "https://omdbapi.com/?apikey=trilogy&s=a+quiet+place&plot=short";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.Search[0].Title);
    console.log(response.Search[0].Year);
    console.log(response.Search[0].Plot);
});

// $.ajax({
//     url: queryURL2,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
// });

