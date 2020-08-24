/*1º exercício
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
function checaIdade(idade) {
 // Retornar uma promise
}

*/
function validaIdade (idade) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            (idade >= 18) ? resolve(console.log('já é um adulto')) : reject(console.log('Ainda é um menor'))
        }, 2000);        
    })
    
}


validaIdade(17)