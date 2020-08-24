
const buttonCreate = document.querySelector('#button-container')
const localcreated = document.querySelectorAll('.button-container')
const createBox = document.createElement('div')
createBox.classList.add('container-squads')

function createSquad () {
   localcreated.appendChild(createBox)
}