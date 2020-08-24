/**
 * 2º exercício
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>

 */

function searchUserInGithub(){  
    const inputUser = document.querySelector('#username')
    const listReposit = document.createElement('li')
    listReposit.classList.add('repose')
    const username = inputUser.nodeValue

    axios.get(`https://api.github.com/users/${username}/repos`)
    .then(function(response){
        documento
    })
    .catch(function(error){
        console.log(error)
    })
}

