const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

const lista = document.querySelector('#listados')
const campo = document.querySelector('.newName')
const botao = document.querySelector('.add')

botao.onclick = handleNewName

function listarNome(nomes){

 
    for (let i = 0; i <= nomes.length; i++){ 
        var item = document.createElement('li')
        item.textContent = nomes[i]

        if( item.textContent > ''){
            lista.appendChild(item)
        
        } else { console.log('Sem mais nomes para adicionar') }

    }

}

function handleNewName() {
    const word = campo.value
    console.log(word)
}

listarNome(nomes)