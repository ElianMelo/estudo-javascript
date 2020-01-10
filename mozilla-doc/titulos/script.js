// Abre todos os títulos do meu site
var titulos = document.querySelectorAll('h1');

// Altera o conteudo de todos os títulos para Titulo Padrão
for(let i = 0; i < titulos.length; i++){
    titulos[i].textContent = "Titulo Padrão";
}
