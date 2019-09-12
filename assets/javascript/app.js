console.log("TEST");
alert("SURPRISED THIS WORKS... YA, SAME HERE!")


var firebaseConfig = {
    apiKey: "AIzaSyBf39CL-NvgZHlCfWC5YgQcCKQZL110yQc",
    authDomain: "kc-cbc-activities.firebaseapp.com",
    databaseURL: "https://kc-cbc-activities.firebaseio.com",
    projectId: "kc-cbc-activities",
    storageBucket: "",
    messagingSenderId: "534272082764",
    appId: "1:534272082764:web:166fc7f479c2caabbd45e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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
    frequency: frequency
});

$("#trainName").val("");
$("#trainDestination").val("");
$("#trainTime").val("");
$("#frequency").val("");

return false;

  });
