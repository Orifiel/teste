const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

const lista = document.querySelector('#listados')


function handleName() {

    window.event.preventDefault()
    const campo = document.querySelector('.newName')
    const text = campo.value
    nomes.push(text)
    console.log( nomes )
    renderList()
}

function renderList(nomes){
    for (nome of nomes){
        var item = document.createElement('li')
        item.textContent = nome

       /* if( item.textContent > ''){
            
        
        } else { console.log('Sem mais nomes para adicionar') } */
        lista.appendChild(item)
    }

}



renderList(nomes)