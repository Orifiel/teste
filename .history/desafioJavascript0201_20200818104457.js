const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus', 'Samanta']

const lista = document.querySelector('#listados')

const campo = document.querySelector('.newName')

const botao = document.querySelector('.add')

const text = campo.value


function handleName() {

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