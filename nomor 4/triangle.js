var a, b, c,
  inputPertama = document.getElementById("input1"),
  inputKedua = document.getElementById("input2"),
  inputKetiga = document.getElementById("input3"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = Number(inputPertama.value);
  b = Number(inputKedua.value);
  c = Number(inputKetiga.value);
  if (a <= b && b <= c) {
    if (Math.pow(c, 2) < (Math.pow(a, 2) + Math.pow(b, 2))) {
      alert("segitiga lancip");
    } else if ((Math.pow(c, 2) > (Math.pow(a, 2) + Math.pow(b, 2)))) {
      alert("segitiga tumpul");
    } else if ((Math.pow(c, 2) === (Math.pow(a, 2) + Math.pow(b, 2)))) {
      alert("segitiga siku - siku");
    }
  } else {
    alert("bukan segitiga");
  }
  // result.innerHTML = ;
});