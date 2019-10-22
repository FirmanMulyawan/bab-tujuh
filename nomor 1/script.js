var a,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = input.value;
  if (a > 0 && a % 4 === 0) {
    alert("merupakan bilangan kelipatan 4");
  } else {
    alert(" Bukan merupakan bilangan kelipatan 4");
  }
});