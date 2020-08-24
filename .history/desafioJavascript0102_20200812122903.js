/*Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321);*/


function NumbersPars(x, y) {
    if (x > y) {
            let z = 0
            z = x + y 
            x = z - x
            y = z - y 
            
        console.log(x,y)
    }
    

}


NumbersPars(321, 32)