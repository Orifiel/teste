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
 
 //função que busca os repositorios de um usuario no github
function searchUserInGithub(){  
    //previne a pagina de dar reload após click do botão
    event.preventDefault()
    //captura o valor contido no input
    const username = document.querySelector('#username').value
    //referencia a div de id repositorys 
    const listRepo = document.querySelector('#respositorys')
    //remove qualquer valor dentro da div repositorys
    listRepo.innerHTML = '';
    //cria um li     
    const listReposit = document.createElement('span')
    //adiciona uma classe css a essa li criada
    listReposit.classList.add('repose')
    //Insere a mensagem de Loading na pagina antes da requisição ajax ocorrer
    listReposit.textContent = 'Loading...'
    //anexa o elemento 'li' como elemento filho do elemento div repopsitorys
    listRepo.appendChild(listReposit)
    
    
    //solicitação ajax com axios para a api do github
    axios.get(`https://api.github.com/users/${username}/repos`)
    //em caso de sucesso, aciona a função .then, que recebe uma função usando a resposta como parametro
    .then(function(response){
        //exibe no terminal o retorno da informação obtida na requisição do axios
        console.log(response.data)
        //invoca a função limparCampo, para zerar o valor dentro do input
        limparCampo(username)
        //remove qualquer valor dentro da div repositorys
        listRepo.innerHTML = '';
            
        //valida se o tamanho de data da resposta obtida é igual a 0
        if (response.data.length == 0){
            //cria elemento h1
            const noReposit = document.createElement('h1')
            //especifica o texto contido em h1
            noReposit.textContent = 'Usuário não possui repositorios'
            //anexa esse h1 como elemento filho da div repositorys
            listRepo.appendChild(noReposit)
            //caso o data da resposta da requisição maior que 0
            } else {
                //para cada elemento dentro de data que é um nodeList
                for (repo of response.data) {
                //cria um li     
                const listReposit = document.createElement('li')
                //adiciona uma classe css a essa li criada
                listReposit.classList.add('repose')

                //cria um a (link)
                const link = document.createElement('a')
                //adiciona o atributo href onde o seu valor é o conteudo é o link do github para aquele repositorio
                link.setAttribute('href', repo.html_url)
                //adiciona o atributo target com o valor _blank para quando o link for aberto, abrir em nova aba
                link.setAttribute('target','_blank')
                //adiciona o texto a tag a com o nome do repositorio obtido via a requisição ajax
                link.textContent = repo.name
                //anexa o elemento 'a' como elemento filho do elemento 'li'
                listReposit.appendChild(link)
                //anexa o elemento 'li' como elemento filho do elemento div repopsitorys
                listRepo.appendChild(listReposit)
                } 
        
            }
        }    
    )
    //em caso de erro da requisição do axios, sera acessado a função catch, com a mensagem de erro obtida
    .catch(function(error){
        //exibe a mensagem de erro no terminal
        console.log(error)
        //remove qualquer valor dentro da div repositorys
        listRepo.innerHTML = '';
        //cria um elemento h1
        const msg_error = document.createElement('h1')
        //anexa um texto a ser usado por esse h1
        msg_error.textContent = 'Não foi possível localizar esse usuário'
        //anexa h1 como elemento filho da div repositorys
        listRepo.appendChild(msg_error)
    })
    
}

//função para limpar o campo input
function limparCampo(){
    //define o valor do input como '' (vazio)
    document.querySelector('#username').value = '';
}