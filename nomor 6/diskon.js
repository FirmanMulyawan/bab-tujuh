var a, b, c,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = input.value;
  b = a - (a % 25);
  c = (a % 25);
  result.innerHTML = b + " Hemat " + c;
});