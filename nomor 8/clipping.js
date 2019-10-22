var a,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = Number(input.value);
  var hasil = 0;
  if (a > 255) {
    hasil = 255;
  } else if (a < 0) {
    hasil = 0;
  } else {
    hasil = a;
  }
  result.innerHTML = hasil;
});
// console.log(konversiRomawi(a));