window.onload = function() {
  
    // Declare variable 'hours' and assign connection to the HTML element with the specified ID
    var hours = 00; 

    // Declare variable 'minutes' and assign connection to the HTML element with the specified ID
    var minutes = 00;

    // Declare variable 'seconds' and assign connection to the HTML element with the specified ID
    var seconds = 00; 

    
    var milliseconds = 00; 	

    
    var attachHours = document.getElementById("hours");
    var attachMinutes = document.getElementById("minutes");
    var attachSeconds = document.getElementById("seconds");
    var attachMilliseconds = document.getElementById("milliseconds");

    var startButton = document.getElementById('start-button'); 
    var stopButton = document.getElementById('stop-button');
    var resetButton = document.getElementById('reset-button');

    
    var interval;


    startButton.onclick = function() {
       
       interval = setInterval(countDuration, 10);
    }

    
    stopButton.onclick = function() {
     
        clearInterval(interval);
    }