/*
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela
no lugar da lista apenas enquanto a requisição estiver acontecendo:

Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404
*/

function buscaRepo(){
    var user = document.getElementById('user');
    var ul = document.getElementById('list');
    ul.innerHTML = '<li>Carregando...</li>';

    axios.get(`https://api.github.com/users/${user.value}/repos`)
        .then(function(response){
            var resps = response.data;
            ul.innerHTML = '';

            resps.map(resp => {
                let li = document.createElement('li');
                let text = document.createTextNode(resp.name);
                li.appendChild(text);
                ul.appendChild(li);
            });
        })
        .catch(function(erro){
            ul.innerHTML = 'Usuário não encontrado';
        });
}