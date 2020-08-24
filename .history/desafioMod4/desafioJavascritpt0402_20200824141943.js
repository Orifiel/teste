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
    const username = document.querySelector('#username').value
    const lista = document.querySelector('#repo-container')
    const listRepo = document.querySelector('#respositorys')
    axios.get(`https://api.github.com/users/${username}/repos`)
    .then(function(response){
        console.log(response)
            for (repo of response.data) {
            const listReposit = document.createElement('li')
            listReposit.classList.add('repose')
            listReposit.textContent = repo.name
            listRepo.appendChild(listReposit)
         } 
    })
    .catch(function(error){
        console.log(error)
    })




}

