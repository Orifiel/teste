const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

function listarNome(nomes){

var lista = document.querySelector('#listados')


for (let i = 0; i <= nomes.length; i++){ 
    var item = document.createElement('li')
    item.textContent = nomes[i]
    if( item.textContet > 0){
        
    lista.appendChild(item)
    } else { console.log('done') }

}



}

listarNome(nomes)