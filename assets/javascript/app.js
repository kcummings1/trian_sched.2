console.log("TEST");
moment().format();  

$(document).ready(function() {
var firebaseConfig = {
    apiKey: "AIzaSyBf39CL-NvgZHlCfWC5YgQcCKQZL110yQc",
    authDomain: "kc-cbc-activities.firebaseapp.com",
    databaseURL: "https://kc-cbc-activities.firebaseio.com",
    projectId: "kc-cbc-activities",
    storageBucket: "",
    messagingSenderId: "534272082764",
    appId: "1:534272082764:web:166fc7f479c2caabbd45e9"
  };
  
  var app = firebase.initializeApp(firebaseConfig);

  var database = firebase.database(app);
  
var name;
var destination;
var firstTime;
var frequency = 0;


  $("#formID").on("submit", function (event) {
      event.preventDefault();

    var name = $("#trainName").val().trim();
    var destination = $("#trainDestination").val().trim();
    var firstTime = $("#trainTime").val().trim();
    var frequency = $("#frequency").val().trim();

database.ref().push({
  name: name,
  destination: destination,
  firstTime: firstTime,
  frequency: frequency,
  //dateAdded: firebase.database.serverValue.TIMESTAMP
});

$("form")[0].reset();

});

database.ref().on("child_added", function(childSnapshot) {

var nextTrain;
var minAway;

console.log(`Moment: ${moment()}`);


var firstTrainNew = moment(childSnapshot.val().firstTrain, "hh:mm").subtract(1, "years");

var diffTime = moment().diff(moment(firstTrainNew), "minutes");
var remainder = diffTime % childSnapshot.val().frequency;

var frequency = childSnapshot.val().frequency - remainder;

var nextTrain = moment().add(minAway, "minutes");
var minAway = moment(nextTrain).format("hh:mm");

$("#tableContent").append("<tr><td>" + childSnapshot.val().name + 
"</td><td>" + childSnapshot.val().destination +
"</td><td" + childSnapshot.val().frequency +
"</td><td>" + nextTrain +
"</td><td>" + minAway + "</td><tr>");

}, function(errorObject) {
  console.log("Error fixed: " + errorObject.code);
});


});