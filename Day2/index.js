/*
setInterval of object time call function TimerHandler excute for 1000 milisecond
let global var
const is block var
getElementById will return the div
.innerHTML will writ
if you run the script before the get element will be null
it is not load it like run html first then script
disable is true mean cannot see
*/
let timer;
let sec =0;
let min =0;
let hour =0;

let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");

start_btn.addEventListener("click", function(){
  timer= setInterval(TimerHandler, 1000);
  reset_btn.disabled = true;
});
stop_btn.addEventListener("click", function(){
  timer= clearInterval(timer);
  reset_btn.disabled = false;
});
reset_btn.addEventListener("click", function(){
  timer= clearInterval(timer);
  reset_btn.disabled = true;
  min =0;
  sec = 0;
  hour =0;
  let timer_element = document.getElementById("timer");
  timer_element.innerHTML ="00 : 00 : 00";
})

function TimerHandler(){
  sec++;
  if(sec == 60){
    sec =0;
    min++;
  }
  if(min == 60){
    min = 0;
    hour++;
  }
  displayTime();
}

function displayTime(){
  let s =sec;
  let m = min;
  let h = hour;
  let timer_element = document.getElementById("timer");
  if(sec<10){
    s = "0"+sec;
  }
  if(min<10){
    m = "0"+min;
  }
  if(hour<10){
    h = "0"+hour;
  }
  timer_element.innerHTML = h + " : " + m + " : "+ s;
}
