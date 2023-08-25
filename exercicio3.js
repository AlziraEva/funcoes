

function faixaEtaria(faixa) {

    if (faixa <= 21) {
        return "Jovem"
    } else if (faixa <= 65) {
        return "Adulto"
    } else if (faixa > 66) {
        return "Idoso"
    }

}
function mensagem(apresentação) {
    const mensagemFaixaEtaria = faixaEtaria(apresentação.idade)
    console.log(` Sou ${dados.nome}, tenho ${dados.idade} anos, sou  ${mensagemFaixaEtaria} e
    tenho ${dados.altura} de altura `)

}

const dados = {
    nome: "Eva",
    idade: 27,
    altura: 1.60



}
mensagem(dados)
