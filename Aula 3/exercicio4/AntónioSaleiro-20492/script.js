function AdicionarImagem() {
  var valor = Math.floor(Math.random() * 100);
  document.getElementById("link").innerHTML =
    "https://placeimg.com/250/150/" + valor;
  var img = document.createElement("img");
  img.src = "https://placeimg.com/250/150/" + valor;
  var src = document.getElementById("myList");
  src.appendChild(img);
  var lista = document.getElementById("myList").childNodes.length;
  //lista = lista + 1;
  document.getElementById("numero").innerHTML = "Número Imagens:" + lista;
}

function RemoverImagem() {
  var list = document.getElementById("myList");
  var lista = document.getElementById("myList").childNodes.length; // Get the <ul> element with id="myList"
  list.removeChild(list.childNodes[0]);
  lista = lista - 1;
  document.getElementById("numero").innerHTML = "Número Imagens:" + lista;
}
