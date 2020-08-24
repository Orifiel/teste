const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

function listarNome(arr){

var lista = document.querySelector('#listados')
var item = document.createElement('li')

for (nome in arr) {
    item.textContent = nome
}

item.classList.add('item-nome')
lista.appendChild(item)

}

listarNome(nomes)