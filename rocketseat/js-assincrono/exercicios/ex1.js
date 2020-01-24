/*
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
*/

function chechaIdade(idade) {
    return new Promise(function(resolve, reject){
        if(idade >= 18){
            setTimeout(resolve, 2000);
        } else {
            setTimeout(reject, 2000);
        }
    });
}

chechaIdade(20)
    .then(function(){
        console.log("Maior que 18");
    })
    .catch(function(){
        console.log("Menor que 18");
    });

