/*
const arr = [1,3,4,5,8,9]

const newarr = arr.map((item, index) => {
    return item + index
})

console.log(newarr)

const sum = arr.reduce((total, next) =>{
    return total + next
})

console.log(sum)

const filter = arr.filter((item) => {
    
    return item % 2 === 0
})

console.log(filter)


const find = arr.find((item) => {
    return item === 4    
})

console.log(find)

*/

/*
const user = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    },
}

const { nome, idade, endereco: { cidade} } = user

console.log(nome, idade, cidade)

function mostraNome({nome, idade}){
    console.log(nome, idade)
}

mostraNome(user)
*/
//REST

/*
const user = {
    nome: 'Cleiton',
    idade: 33,
    empresa: 'Rocketseat'
};

const {nome, ...resto} = user;

console.log(nome)
console.log(resto)


function soma (a,b,...params) {
    return params.reduce((total,next) => total + next)
}

console.log(soma(1,3,4,5,6))
*/
/*
const arr1 = [1,2,3]
const arr2 = [4,5,6]


const arr3 = [...arr1, ...arr2]


const user1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocket',
}

const user2 = { ...user1, nome: 'Cleiton', idade: 33}
console.log(user2)
*/

/*
const nome = "Cleiton"
const idade = 33

const usuario = {
    nome,
    idade,
    empresa: 'Rocketseat'
}

console.log(usuario)
*/

//DESAFIOS

/* 1)
Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".
A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true


*/


/** Classes */

class Usuario {
    constructor(mail, password){
            this.mail = mail,
            this.password = password,
            this.admin = false
        
    }
    isAdmin(){
        return this.admin === true
    }
}
class Admin extends Usuario {
    constructor(){
        super()
        this.admin = true
    }
}
const User1 = new Usuario('email@teste.com','senha123')
const Adm1 = new Admin('email@teste.com', 'senha123')
const User2 = new Admin('teste@mail.com', 'pwd123')
const User3 = new Usuario('coisa@coisa.com', '123456')

User1.isAdmin()
Adm1.isAdmin()
User2.isAdmin()

function msgAdmin(User) {
    if (User) { return console.log(`Bem vindo Admin`) }
    else { return console.log('Não tem permissão de Admin')}
}

msgAdmin(User1.isAdmin())
msgAdmin(Adm1.isAdmin())
msgAdmin(User2.isAdmin())
msgAdmin(User3.isAdmin())

/**
 * const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

 * 
 */
const users = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idadeUsers = users.map(({ idade })=> {
    return idade
})
console.log(idadeUsers)

const rockets = users.filter((user)=>{
    return (user.idade >= 18 && user.empresa == "Rocketseat")
     
})
console.log(rockets)

const searchEmployed = users.find((user)=>{
    return user.empresa == "Facebook"
})

console.log(searchEmployed)


const newArr = users.map(({nome, idade, empresa})=> {
    
    return user = {
        nome,
        idade: idade * 2,
        empresa
    } 
})

const ageBig50 = newArr.filter((user)=>{
    
    return  user.idade <= 50
})

console.log('teste',ageBig50)

/** Proximo a fazer é o 3 exercicio
 * 
 const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

 */

 /**Arrow function */

 const arr = [1,2,3,4,5]
 const newarr = arr.map((item) => item + 10)
console.log(newarr)

/**
 * const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
 */

 const usuario3 = { nome: 'Cleiton', idade: 23}
 const mostraIdade = () => usuario3.idade

console.log(mostraIdade(usuario3))

/**
 * const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idad
 */

 const nome4 = 'Cleiton'
 const idade4 = 33
 const mostraUser = (nome = 'Diego', idade = 19) => {
    return { nome, idade }
 } 

 console.log(mostraUser(nome4, idade4))
 console.log(mostraUser(nome4))

 /**
  * const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 }
  */

  const promise = () => {
      return new Promise((res, resp, rej) => {
          return resolve()
      })
  }

  /** Desestruturação */

  const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

   const { nome, endereco: { cidade, estado} } = empresa
   console.log(nome)
   console.log(cidade)
   console.log(estado)

   function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
   }
   console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

   /** REST  */

   const arrconjunto = [1,2,3,4,5,6]
   const [ x = [0] , ...y ] = arrconjunto
   console.log(x)
   console.log(y)



   function soma(...params) {
      let somatoria = params.reduce((total,next)=>{
           return total + next
       })
           
       return somatoria
   }

   console.log(soma(1,2,3,4,5))

/** SPREAD */

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };
   
const usuario2 = {
    ...usuario,
    nome: 'Gabriel'
}   

console.log(usuario2)

const usuario4 = {
    ...usuario,
    endereco : {
        ...usuario.endereco,
        cidade: 'Lontras'
    } 
    
}

console.log(usuario4)

/** Template Literals */

const nomeusuario = 'Diego';
const idadeusuario = 23;
console.log('O usuário ' + nomeusuario + ' possui ' + idadeusuario + ' anos');
/** Exemplo agora usando o template literals */
console.log(`O usuário ${nomeusuario} possui ${idadeusuario} anos`)


// Sintaxe curta de objetos

const novonome = 'Diego';
const novaidade = 23;
const novousuario = {
 novonome,
 novaidade,
 cidade: 'Rio do Sul',
};

console.log(novousuario)