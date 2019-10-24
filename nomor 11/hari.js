var a, b, c,
  selectOne = document.getElementById("selectOne"),
  selectTwo = document.getElementById("selectTwo"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = Number(selectOne.value);
  b = Number(selectTwo.value);
  if (a < b) {
    c = (b - a) + 1;
  } else if (a === b) {
    c = 1;
  } else if (a > b) {
    c = ((7 - a) + b) + 1;
  }
  result.innerHTML = c;
});