var a,
  umur = document.getElementById("umur"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = Number(umur.value); //masukkan umur
  var hasil = "";
  if (a < 5) {
    hasil = " Balita";
  } else if (a >= 5 && a < 12) {
    hasil = " Anak - anak";
  } else if (a >= 12 && a < 20) {
    hasil = " Remaja";
  } else if (a >= 20 && a < 60) {
    hasil = " Dewasa";
  } else {
    hasil = " Tua";
  }
  result.innerHTML = hasil;
});