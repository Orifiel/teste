
const buttonCreate = document.querySelector('#getsquadred')
const localcreated = document.querySelectorAll('.button-container')
const createBox = document.createElement('div')
createBox.classList.add('container-squads')

function createSquad () {
    alert(localcreated.value)
   localcreated.appendChild(createBox)
}