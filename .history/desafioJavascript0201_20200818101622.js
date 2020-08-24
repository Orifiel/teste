const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

function listarNome(nomes){

var lista = document.querySelector('#listados')


for (let i = 0; i <= nomes.length; i++){ 
    var item = document.createElement('li')
    item.textContent = nomes[i]
    lista.appendChild(item)
        
}



}

listarNome(nomes)