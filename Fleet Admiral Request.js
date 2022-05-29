document.getElementById("FleetAdmiralRequest").innerHTML="timer";
//  AlbertX May-29-2022for this assignment.  
//We Needed at least one condiciontal or Else statement//


function MyTimer(callback, val) {// This function suppost to work as our countdown
        val = val || 60; // variable
        var timer=setInterval(function() { // We set interval so it can repeat same funtion 
            callback(val);
            if(val-- <= 0) { // statement if our variable val is decreasing or is less or egual to 0
                clearInterval(timer); // used this variable
            } 
             }, 1000);
            }
       new MyTimer(function(val) {
        var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
        document.getElementById("timer").textContent = timerMsg; 
        });
    <div id="timer"></div>