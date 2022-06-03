// Albert X/ 05-29-2022 Resubmitting my assignment
var countdowntimer;// Variable
var time = 10// variable
function countdown() { //use a function called countdown 
  countdowntimer = setInterval(() => textChanger(), 1000);//Inside the function we  have setInterval equal or greater than textchanger 
//function in line 8, and we are counting a thousand miliseconds
}

function textChanger() {//Lines between 9 to 24 //we have a function called textChanger.Inside the function we have a loop (Let("timer") to return timer. Also, we called If Statement// In our statament we are lopping into timer to then set our countertimer statement
    //So If statement  (time is less or equal to 0 then return time, and stop. Else dicrement the time -- to 0; return launch and time. 
    //IF time is egqual to 5 return "Half way to Blastoff" ) As requested for this assignment.
  let timer = document.getElementById('timer')
  if (time <= 0) {
    timer.innerText = time
    Stop()
  } else {
    time--;
    timer.innerText = "Launch! " + time;
  }
  if (time == 5)
    timer.innerText = "Half way to Blastoff!";
}

function Stop() { clearInterval(countdowntimer) };//End countdown 
