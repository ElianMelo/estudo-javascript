/*
Bloco de comentário
*/

// Comentário de linha

// Cria uma variável global
var meuNome;
meuNome = "Elian";
console.log("O meu nome é " + meuNome);

// Cria uma constante
const nomeArq = "fundamentos.js";
console.log("O nome deste arquivo é " + nomeArq);

// Tipos de dados
var nomeCompleto = "Elian Melo Morais";
var idade = "17";
var disponivel = true;
var linguagens = ["javascript", "java", "angularjs", "sql"];
var elian = {
    nome: "Elian",
    idade: "17",
    disponivel: false,
    linguagens: ["javascript", "angularjs"]
};

console.log("Tipos de dados: ");
console.log(nomeCompleto);
console.log(disponivel);
console.log(elian);
console.log(elian.nome);

// Cria uma função de soma
var somar = function (a, b) {
    // Cria uma variavel local
    let soma = a + b;
    console.log("A soma de " + a + " com " + b + " da " + soma);
    return;
}

// Chama a função de soma
somar(5, 5);

// Este código irá retornar erro, pois a variável soma é local
console.log(soma);

// Operadores Condicionais
var ling = "javascript";

if (ling == "javascript"){
    console.log("Eu gosto de javascript");
} else if (ling == "python"){
    console.log("Eu gosto de python");
} else {
    console.log("Esta linguagem é interessante");
}

// Cria função de multiplicação
function multi(num1, num2) {
    console.log(num1 * num2);
    return;
}

// Realiza chamadas da função de multiplicação
multi(4, 7);
multi(20, 20);
multi(0.5, 3);

// Evento de click que emite um alerta
document.querySelector("html").onclick = function() {
    alert("Eita, não clica em mim");
}