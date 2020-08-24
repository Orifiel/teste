const nomes = ['Cleiton', 'Mariana', 'Nicolas', 'Matheus']

const lista = document.querySelector('#listados')
console.log(lista)
const campo = document.querySelector('.newName')
console.log(campo)
const botao = document.querySelector('.add')
console.log(botao)
const text = campo.value
console.log(text)

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