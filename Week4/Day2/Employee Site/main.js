// moment().format();
// moment("12/25/1995", "MM-DD-YYYY");
var config = {
    apiKey: "AIzaSyBw6KqpY7YgYpxt7A9S_KxsUbYRFwWgieI",
    authDomain: "myawesomeprojeect.firebaseapp.com",
    databaseURL: "https://myawesomeprojeect.firebaseio.com",
    projectId: "myawesomeprojeect",
    storageBucket: "myawesomeprojeect.appspot.com",
    messagingSenderId: "264985659895"
};
firebase.initializeApp(config);

var database = firebase.database();
var name, role, startDate, rate;

// function findMonths(){
//     var momentStart = moment(startDate, "MM-DD-YYYY");
//     var currentTime = moment().format("MM-DD-YYYY");
//     console.log(currentTime.diff(momentStart, 'months'));
//     return currentTime.diff(momentStart, 'months');
// }


database.ref().on("child_added", function(childSnapshot){
    var newRow = $("<tr>");
    var employeeName = $("<td>").text(childSnapshot.val().name);
    var roleElement = $("<td>").text(childSnapshot.val().role);
    var start = $("<td>").text(childSnapshot.val().startDate);

    var momentStart = moment(childSnapshot.val().startDate, "MM-DD-YYYY");
    var currentTime = moment();
    var totalMonths = currentTime.diff(momentStart, 'months');
    // console.log(totalMonths);

    var monthsWorked = $("<td>").text(totalMonths);
    var monthlyRate = $("<td>").text(childSnapshot.val().rate);

    // console.log(parseInt(totalMonths) * parseInt(monthlyRate));
    var totalBilled = $("<td>").text(parseInt(totalMonths) * parseInt(childSnapshot.val().rate));
    
    newRow.append(employeeName);
    newRow.append(roleElement);
    newRow.append(start);
    newRow.append(monthsWorked);
    newRow.append(monthlyRate);
    newRow.append(totalBilled);
    $("#table-body").prepend(newRow);
});

$("#submitButton").on("click", function(){
    event.preventDefault();

    name = $("#emp-name").val();
    role = $("#emp-role").val();
    startDate = $("#date").val();
    rate = $("#rate").val();
    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(rate);
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    })
});

