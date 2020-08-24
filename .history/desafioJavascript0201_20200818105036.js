const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

const lista = document.querySelector('#listados')


function handleName() {

    window.event.preventDefault()
    const campo = document.querySelector('.newName')
    const text = campo.value
    nomes.push(text)
    console.log( nomes )
}

function renderList(nomes){
    for (let i = 0; i <= nomes.length; i++){ 
        var item = document.createElement('li')
        item.textContent = nomes[i]

        if( item.textContent > ''){
            lista.appendChild(item)
        
        } else { console.log('Sem mais nomes para adicionar') }

    }

}



renderList(nomes)