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
  var arr = [a, b, c];
  var length = arr.length;

  //looping untuk menentukan panjang variabel
  for (var i = 0; i < length; i++) {
    //
    for (var j = 0; j < (length - i - 1); j++) {
      //membandingkan 2 nilai
      if (arr[j] > arr[j + 1]) {
        // tukar nilai (teori 3 ember)
        var tmp = arr[j]; //variabel sementara untuk menyimpan nilai  saat ini
        arr[j] = arr[j + 1]; //ganti nilai saat ini dengan nilai  yang berdekatan
        arr[j + 1] = tmp; //ganti nilai yang berdekatan dengan nilai saat ini
      }
    }
  }
  result.innerHTML = arr;
});