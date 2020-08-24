const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

function listarNome(nomes){

var lista = document.querySelector('#listados')


for (let i = 0; i <= nomes.length; i++){ 
    var item = document.createElement('li')
    item.TEXT_NODE = nomes[i]
    lista.appendChild(item)
        
}



}

listarNome(nomes)