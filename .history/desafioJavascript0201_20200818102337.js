const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

function listarNome(nomes){

const lista = document.querySelector('#listados')
const campo = document.querySelector('.newName')

    for (let i = 0; i <= nomes.length; i++){ 
        var item = document.createElement('li')
        item.textContent = nomes[i]

        if( item.textContent > ''){
            lista.appendChild(item)
        
        } else { console.log('Sem mais nomes para adicionar') }

    }

}

listarNome(nomes)