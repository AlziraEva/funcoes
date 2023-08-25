const dados = {
    nome: "Eva",
    idade: 27,
    altura: 1.59,
    profissao: "desenvolvedora de software"
}

function dadosPessoais(pessoa) {
    console.log(`Olá meu é ${pessoa.nome}, sou um(a) jovem  de ${pessoa.idade} anos, ${pessoa.altura} de altura, e sou
    ${pessoa.profissao}`)
}

dadosPessoais(dados)