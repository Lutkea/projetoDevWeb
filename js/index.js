function salvarSabor(){
    var inputAdicionar = document.getElementById("sabor");
    var valorAdicionar = inputAdicionar.value;
    var divBox = document.getElementById("box");

    var paragrafo = document.createElement("div");
    paragrafo.innerText = valorAdicionar;
    paragrafo.style.backgroundColor = "rgba(0, 0, 0, 0.829)";
    paragrafo.style.width = "100px";
    divBox.appendChild(paragrafo);
}

// function limparConteudo(){
//     var divBox = document.getElementById("box");
//     divBox.innerHTML = "";
// }
