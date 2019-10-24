var a, b,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = input.value;
  b = 0;
  if (a == '1') {
    b = 1;
  } else if (a == '2') {
    b = 2;
  } else if (a == '3') {
    b = 3;
  } else if (a == '4') {
    b = 4;
  } else if (a == '5') {
    b = 5;
  } else if (a == '6') {
    b = 6;
  } else if (a == '7') {
    b = 7;
  } else if (a == '8') {
    b = 8;
  } else if (a == '9') {
    b = 9;
  } else if (a == '0') {
    b = 0;
  } else {
    alert('Merupakan type text');
  }

  result.innerHTML = b;
});