// Albert X/ 05-29-2022 Resubmitting my assignment
var countdowntimer;
var time = 10
function countdown() {
  while(time > 0) {
    textChanger()
  }
}

function textChanger() {
  let timer = document.getElementById('timer')
  timer.innerText = "Launch! " + time;
  time--;
  if (time == 5)
    timer.innerText = "Half way to Blastoff!";
}

function reset() { time = 10 };
