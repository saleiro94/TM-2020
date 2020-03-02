function atualizarTexto(){
    var texto = document.getElementById("inputTexto").value;
    if(!texto.length)alert("Escreva algo no Input");
    document.getElementById("texto").innerText = texto;
}