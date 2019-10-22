var a, b, c, d, e, f, g,
  tinggiBadan = document.getElementById("tinggiBadan"),
  beratBadan = document.getElementById("beratBadan"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = tinggiBadan.value; //tinggi badan
  b = beratBadan.value; // berat badan
  // menghitung berat badan ideal
  c = a - 100;
  d = 0.1 * c;
  e = c - d; // berat badan ideal
  f = e + 2; // berat badan max
  g = e - 2; // berat badan min
  var hasil = "";
  if (b <= f && b >= g) {
    hasil = "IDEAL";
  } else {
    hasil = " TIDAK IDEAL";
  }


  result.innerHTML = " tinggi badannya adalah " + a + "<br> berat badannya adalah " + b + "<br> berat badannya idealnya adalah " + e + "<br> statusnya adalah " + hasil;
});