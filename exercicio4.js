


const dados = {
    nome: "Eva",
    idade: 27,
    altura: 1.60,
    mensagem: function () {
        const mensagemFaixaEtaria = this.faixaEtaria(this.idade)

        console.log(` Sou ${this.nome}, tenho ${this.idade} anos, sou  ${mensagemFaixaEtaria} e
        tenho ${this.altura} de altura `)

    },
    faixaEtaria: function () {

        if (this.idade <= 21) {
            return "Jovem"
        } else if (this.idade <= 65) {
            return "Adulto"
        } else if (this.idade > 66) {
            return "Idoso"
        }

    }

}
dados.mensagem()