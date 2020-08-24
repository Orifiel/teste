/*
1º exercício
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela
*/



    
function addSquad() {
    const caixa = document.querySelector('#container')
    
    const div = document.createElement('div');  
    
    div.classList.add('container-squads')
        
    div.onmouseover =  function colorize() {
        div.style.border = newColor
        div.style.background = newColor
       
    }
 
    
    
    caixa.appendChild(div)
}
/*
2º exercício
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
 // #E943F0
*/
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
   var newColor = getRandomColor();
   
   
