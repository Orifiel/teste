"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Usuario = /*#__PURE__*/function () {
  function Usuario(mail, password) {
    _classCallCheck(this, Usuario);

    this.mail = mail, this.password = password, this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
var User2 = new Admin('teste@mail.com', 'pwd123');
var User3 = new Usuario('coisa@coisa.com', '123456');
User1.isAdmin();
Adm1.isAdmin();
User2.isAdmin();

function msgAdmin(User) {
  if (User) {
    return console.log("Bem vindo Admin");
  } else {
    return console.log('Não tem permissão de Admin');
  }
}

msgAdmin(User1.isAdmin());
msgAdmin(Adm1.isAdmin());
msgAdmin(User2.isAdmin());
msgAdmin(User3.isAdmin());
/**
 * const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

 * 
 */

var users = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idadeUsers = users.map(function (_ref) {
  var idade = _ref.idade;
  return idade;
});
console.log(idadeUsers);
var rockets = users.filter(function (user) {
  return user.idade >= 18 && user.empresa == "Rocketseat";
});
console.log(rockets);
var searchEmployed = users.find(function (user) {
  return user.empresa == "Facebook";
});
console.log(searchEmployed);
var newArr = users.map(function (_ref2) {
  var nome = _ref2.nome,
      idade = _ref2.idade,
      empresa = _ref2.empresa;
  return user = {
    nome: nome,
    idade: idade * 2,
    empresa: empresa
  };
});
var ageBig50 = newArr.filter(function (user) {
  return user.idade <= 50;
});
console.log('teste', ageBig50);
/** Proximo a fazer é o 3 exercicio
 * 
 const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

 */

/**Arrow function */

var arr = [1, 2, 3, 4, 5];
var newarr = arr.map(function (item) {
  return item + 10;
});
console.log(newarr);
/**
 * const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
 */

var usuario3 = {
  nome: 'Cleiton',
  idade: 23
};

var mostraIdade = function mostraIdade() {
  return usuario3.idade;
};

console.log(mostraIdade(usuario3));
/**
 * const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idad
 */

var nome4 = 'Cleiton';
var idade4 = 33;

var mostraUser = function mostraUser() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 19;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUser(nome4, idade4));
console.log(mostraUser(nome4));
/**
 * const promise = function() {
return new Promise(function(resolve, reject) {
return resolve();
}
 */

var promise = function promise() {
  return new Promise(function (res, resp, rej) {
    return resolve();
  });
};
/** Desestruturação */


var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo(_ref3) {
  var nome = _ref3.nome,
      idade = _ref3.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
/** REST  */

var arrconjunto = [1, 2, 3, 4, 5, 6];
var _arrconjunto$ = arrconjunto[0],
    x = _arrconjunto$ === void 0 ? [0] : _arrconjunto$,
    y = arrconjunto.slice(1);
console.log(x);
console.log(y);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  var somatoria = params.reduce(function (total, next) {
    return total + next;
  });
  return somatoria;
}

console.log(soma(1, 2, 3, 4, 5));
/** SPREAD */

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  nome: 'Gabriel'
});

console.log(usuario2);

var usuario4 = _objectSpread(_objectSpread({}, usuario), {}, {
  endereco: _objectSpread(_objectSpread({}, usuario.endereco), {}, {
    cidade: 'Lontras'
  })
});

console.log(usuario4);
