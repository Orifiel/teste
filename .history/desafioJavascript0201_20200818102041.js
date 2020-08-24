const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

function listarNome(nomes){

let lista = document.querySelector('#listados')


    for (let i = 0; i <= nomes.length; i++){ 
        var item = document.createElement('li')
        item.textContent = nomes[i]
        if( item.textContent > ''){
            lista.appendChild(item)
        
        } else { console.log('done') }

    }

}

listarNome(nomes)