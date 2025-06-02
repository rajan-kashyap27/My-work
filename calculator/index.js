let calValue = "";

function clearCal() {
  calValue = "";
  document.getElementById("cal").value = calValue;
}

function one() {
  calValue += "1";
  document.getElementById("cal").value = calValue;
}

function two() {
  calValue += "2";
  document.getElementById("cal").value = calValue;
}

function three() {
  calValue += "3";
  document.getElementById("cal").value = calValue;
}

function four() {
  calValue += "4";
  document.getElementById("cal").value = calValue;
}

function five() {
  calValue += "5";
  document.getElementById("cal").value = calValue;
}

function six() {
  calValue += "6";
  document.getElementById("cal").value = calValue;
}

function seven() {
  calValue += "7";
  document.getElementById("cal").value = calValue;
}

function eight() {
  calValue += "8";
  document.getElementById("cal").value = calValue;
}

function nine() {
  calValue += "9";
  document.getElementById("cal").value = calValue;
}

function zero() {
  calValue += "0";
  document.getElementById("cal").value = calValue;
}

function add() {
  calValue += "+";
  document.getElementById("cal").value = calValue;
}

function sub() {
  calValue += "-";
  document.getElementById("cal").value = calValue;
}

function div() {
  calValue += "/";
  document.getElementById("cal").value = calValue;
}

function mul() {
  calValue += "*";
  document.getElementById("cal").value = calValue;
}
function rem() {
  calValue += "%";
  document.getElementById("cal").value = calValue;
}

function result() {
  try {
    let res = eval(calValue);
    document.getElementById("cal").value = res;
    calValue = res.toString(); // To continue calculation
  } catch (e) {
    document.getElementById("cal").value = "Error";
    calValue = "";
  }
}
