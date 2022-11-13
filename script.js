const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const amEl = document.getElementsByClassName("am");
const body = document.getElementsByTagName("body");

const btnAdd = document.querySelector(".btnADD");
const btnSET = document.querySelector(".btnSET");
const clk = document.querySelector(".clock");
const alarm = document.querySelector(".AL");
const alH = document.querySelector(".al_hours");
const alM = document.querySelector(".al_min");
const alS = document.querySelector(".al_sec");

let currHours, ampm, time, h, m, s;

let trig = true;
let sete = false;

//alarm tigg
function setIntervalX(delay, repetitions) {
  var x = 0;
  let hide = false;
  

  var intervalID = window.setInterval(function () {
    hide ? clk.classList.remove("hidden") : clk.classList.add("hidden");
    hide = !hide;

    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}

// alarm variables
let setHour = (setTime = setH = setM = setS = null);

// check alarm time with real clock
const checker = (hh, mm = 0, ss = 0) => {
  
  if (hh != null && hh == h && mm == m && ss == s) {
    
    trig = !trig;
    setIntervalX(500, 12);
  }
};

// Convert 24 FORMAT TO 12 ////
const convert = (currHour) => {
  if (currHour == 0) return 12;
  else return currHour > 12 ? currHour - 12 : currHour;
};

///// CLOCK /////////

const clock = () => {
  ///getting current time
  time = new Date();
  currHours = time.getHours();
  m = time.getMinutes();
  s = time.getSeconds();
  ampm = currHours >= 12 ? "PM" : "AM";
  h = convert(currHours);
  

  //calling check

  sete && !trig && checker(setH, setM, setS);

  //updating clock realtime
  hourEl.textContent = h;
  minuteEl.textContent = m;
  secondEl.textContent = s;
  amEl.textContent = ampm;
};
setInterval(clock, 1000);

// setting up alarm clocK
// add alarm button
btnAdd.addEventListener("click", function () {
  btnSET.classList.remove("hidden");
  alarm.classList.remove("hidden");
});

// set alarm button

const upDate = () => {
  if (!sete && !alH.value.length <= 0 && alH.value != 0) {
    setH = alH.value;
    setM = alM.value;
    setS = alS.value;
    trig = !trig;
    sete = !sete;

  }
}
btnSET.addEventListener("click", upDate);
