function demo() {
  var data = document.getElementById("uname").value;
  alert("Function calling....." + data);
}

function Add() {
  var v1 = document.getElementById("n1").value;
  var v2 = document.getElementById("n2").value;
  var result = document.getElementById("result");
  var sum = Number(v1) + Number(v2);
  result.innerHTML = sum;
}
function Sub() {
  var v1 = document.getElementById("n1").value;
  var v2 = document.getElementById("n2").value;
  var result = document.getElementById("result");
  var sum = Number(v1) - Number(v2);
  result.innerHTML = sum;
}
function Mul() {
  var v1 = document.getElementById("n1").value;
  var v2 = document.getElementById("n2").value;
  var result = document.getElementById("result");
  var sum = Number(v1) * Number(v2);
  result.innerHTML = sum;
}
function Div() {
  var v1 = document.getElementById("n1").value;
  var v2 = document.getElementById("n2").value;
  var result = document.getElementById("result");
  var sum = Number(v1) / Number(v2);
  result.innerHTML = sum;
}

function validation() {
  // alert("Val call.....");
  var v1 = document.getElementById("n1");
  v1.style.backgroundColor = "skyblue";
  v1.style.color = "white";
  var v2 = document.getElementById("n2");
  v2.style.backgroundColor = "skyblue";
  v2.style.color = "white";
}
