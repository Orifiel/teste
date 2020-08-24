/*Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321);*/


function NumbersPars(x, y) {
    if (x > y) {
            x = x + y
            y = x - y
            x = y + (-x)
        console.log(x,y)
    }
    

}


NumbersPars(321, 32)