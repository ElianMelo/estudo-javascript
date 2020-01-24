/*
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/diego3g/repos

Basta alterar "diego3g" pelo nome do usuário.

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
*/

function buscaRepo(){
    var user = document.getElementById('user');
    var ul = document.getElementById('list');

    axios.get(`https://api.github.com/users/${user.value}/repos`)
        .then(function(response){
            var resps = response.data;
            ul.innerHTML = '';

            // Usando for
            /*for (let i = 0; i < resps.length; i++) {
                let li = document.createElement('li');
                let text = document.createTextNode(resps[i].name);
                li.appendChild(text);
                ul.appendChild(li);
            }*/

            // Usando map
            resps.map(resp => {
                let li = document.createElement('li');
                let text = document.createTextNode(resp.name);
                li.appendChild(text);
                ul.appendChild(li);
            });
        })
        .catch(function(erro){
            return console.log('Houve um erro na requisição' + erro);
        });
}