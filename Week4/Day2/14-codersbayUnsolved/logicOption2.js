// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBw6KqpY7YgYpxt7A9S_KxsUbYRFwWgieI",
    authDomain: "myawesomeprojeect.firebaseapp.com",
    databaseURL: "https://myawesomeprojeect.firebaseio.com",
    projectId: "myawesomeprojeect",
    storageBucket: "myawesomeprojeect.appspot.com",
    messagingSenderId: "264985659895"
  };
  firebase.initializeApp(config);
// Assign the reference to the database to a variable named 'database'
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot){
    if(snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()){
        highBidder = snapshot.val().highBidder;
        highPrice = snapshot.val().highPrice;

        $("#highest-bidder").text(highBidder);
        $("#highest-price").text(highPrice);

        database.ref().set({
            highBidder: highBidder,
            highPrice: highPrice
        });
    }
    else {
        highPrice = initialBid;
        highBidder = initialBidder;
        $("#highest-bidder").text(highBidder);
        $("#highest-price").text(highPrice);
    }
});


// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(){
    event.preventDefault();


});

// prevent form from submitting with event.preventDefault() or returning false

// Get the input values


// Log the Bidder and Price (Even if not the highest)


// If Then statements to compare against previous high bidder


// Alert that they are High Bidder


// Save the new price in Firebase


// Log the new High Price


// Store the new high price and bidder name as a local variable (could have also used the firebase variable)


// Change the HTML to reflect the new high price and bidder

// Else tell user their bid was too low via alert