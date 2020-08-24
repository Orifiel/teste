/*
1º exercício
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela
*/



//função para adicionar um quadrado a tela ao click do botão    
function addSquad() {
    //identificado o nó na dom onde ele será inserido
    const caixa = document.querySelector('#container')
    //criando o elemento a ser inserido na dom
    const div = document.createElement('div');  
    //adicionando a classe a nova div
    div.classList.add('container-squads')
    //adicionando o evento de passar o mouse sobre a div criada e atribuindo uma função a esse evento    
    div.onmouseover =  function colorize() {
        //definindo a da cor da borda, usando a função getRandomColor para gerar a cor aleatoriamente
        div.style.borderColor = getRandomColor()
        //definindo a cor de fundo, usando a função getRandomColor
        const background = div.style.background = getRandomColor()

        if(background.value == #000000) { alert('BLACK HOLE') }
       
    }
    //anexando a div criada, como filho do nó de id #container
    caixa.appendChild(div)
}
/*
2º exercício
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
 // #E943F0
*/

//função que gera cores aleatorias
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
   var newColor = getRandomColor();
   
   
