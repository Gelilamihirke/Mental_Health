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

    
    resetButton.onclick = function() {
        // Clear the interval	
        clearInterval(interval);

       
        hours = "00"; 

        
        minutes = "00";

        
        seconds = "00";

        
        milliseconds = "00";

        
        attachHours.innerHTML = hours; 
        attachMinutes.innerHTML = minutes; 
        attachSeconds.innerHTML = seconds; 
        attachMilliseconds.innerHTML = milliseconds;
    }

    function countDuration() {
        
        milliseconds++; 

        
        if(milliseconds < 9){
            attachMilliseconds.innerHTML = "0" + milliseconds;
        }

        if (milliseconds > 9){
            attachMilliseconds.innerHTML = milliseconds;      
        } 
 if (milliseconds > 99) {
            console.log("seconds");
            seconds++;		      	
            attachSeconds.innerHTML = "0" + seconds;
            milliseconds = 0;
            attachMilliseconds.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            attachSeconds.innerHTML = seconds;
        }

        
        if (seconds > 59){
            console.log("minutes"); 
            minutes++; 
            attachMinutes.innerHTML = "0" + minutes; 
            seconds = 0; 
            attachSeconds.innerHTML = "0" + 0; 
        }

         if (minutes > 9){
            attachMinutes.innerHTML = minutes;
        }

        
        if (minutes > 59){
            console.log("hours"); 
            hours++; 
            attachHours.innerHTML = "0" + hours; 
            minutes = 0; 
            attachMinutes.innerHTML = "0" + 0; 
        }

        if (hours > 9){
            attachHours.innerHTML = hours;
        }
    }
}

