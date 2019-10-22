var a,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = input.value;
  var desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var hasil = '';

  for (var index = 0; index < desimal.length; index++) {
    while (desimal[index] <= a) {
      hasil = hasil + romawi[index];
      a = a - desimal[index];
    }
  }
  result.innerHTML = hasil;
});
// console.log(konversiRomawi(a));