var nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

const lista = document.querySelector('#listados')
const campo = document.querySelector('.newName')
const botao = document.querySelector('.add')

function addName() {

    window.event.preventDefault()
    
    var text = campo.value
    nomes.push(text)
    campo.value = ''
    console.log( nomes )
    renderList()
}

botao.onclick = addName

function renderList(nomes){
    lista.innerHTML = ''
    for (nome of nomes){
        var item = document.createElement('li')
        item.textContent = nome

       
    }
    lista.appendChild(item)
}

renderList(nomes)