let nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

const lista = document.querySelector('#listados')
const botao = document.querySelector('.add')

function handleName() {

    window.event.preventDefault()
    const campo = document.querySelector('.newName')
    const text = campo.value
    nomes.push(text)
    campo.value = ''
    console.log( nomes )
    renderList()
}

botao.onclick = handleName

function renderList(nomes){
    for (nome of nomes){
        var item = document.createElement('li')
        item.textContent = nome

        lista.appendChild(item)
    }

}

renderList(nomes)