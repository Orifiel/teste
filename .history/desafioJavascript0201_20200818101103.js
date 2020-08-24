const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

function listarNome(nomes){

var lista = document.querySelector('#listados')
var item = document.createElement('li')

for (let i = 0; i <= nomes.length; i++){ 
    
    console.log(nomes[i]) 
    lista.appendChild(item.textContent = nomes[i])
}



}

listarNome(nomes)