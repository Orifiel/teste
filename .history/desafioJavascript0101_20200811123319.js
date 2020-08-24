const endereco = {
    rua: "Rua Batuira",
    numero: 65,
    bairro: "Jd Eliza",
    cidade: "Francisco Morato",
    uf: "SP"
   };
   
function address(endereco) {
    return console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com n° ${endereco.numero}.`)
}   

address(endereco)


/*O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.*/
