var a,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = Number(input.value);
  if (a > 100000) {
    var hasil = 0;
    hasil = (a - (0.1 * a));
  } else {
    hasil = a;
  }
  result.innerHTML = hasil;
});