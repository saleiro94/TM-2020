var arrayNumbers = [];
function adicionarNumero() {
  var number = document.getElementById("newNumbers").value;
  document.getElementById("newNumbers").value = "";
  arrayNumbers.push(parseInt(number));
  document.getElementById("adicionados").innerHTML =
    "valores adiconados:" + arrayNumbers;
  console.log(arrayNumbers);
}
function calcular() {
  if (arrayNumbers.length < 5) {
    alert("Deve Adicionar no minimo 5 úmeros!!");
  } else {
    document.getElementById("maior").innerHTML =
      "Maior número:" + Math.max.apply(Math, arrayNumbers);
  }
}
