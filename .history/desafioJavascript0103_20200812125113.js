/*3º exercício
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
Dica: para verificar se um vetor contém um valor, utilize o método indexOf */

const skills = ["Javascript", "ReactJS", "React Native"]

function getSkills (skills) {
    for (const skill in skills) {
        let haveJavascript = skills.hasOwnProperty(skill == "Javascript") ? 1 : 0 
                       
        }
        return haveJavascript
    }
console.log(getSkills(skills))