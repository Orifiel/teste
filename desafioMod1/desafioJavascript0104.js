/*4º exercício
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master/*/

let anosEstudo = 12

function experiencia(anos){
    if (anos > 0 && anos <= 1) { console.log("Iniciante")}
    if (anos > 1 && anos <= 3) { console.log("Intermediario")}
    if (anos > 0 && anos <= 6) { console.log("Avançado")}
    if (anos >= 7) { console.log("Jedi master")}
    
}

experiencia(anosEstudo)