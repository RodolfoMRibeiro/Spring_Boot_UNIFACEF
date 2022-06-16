class Card {
    constructor(curso, nome, descricao) {
        this.curso = curso;
        this.nome = nome;
        this.descricao = descricao;
    }

    cadastrar = async () => {
        
        await fetch('http://localhost:8080/card', {
        method: "POST",
        body: JSON.stringify(card), // dado json convertido para string
        headers: {'Content-Type': 'application/json; charset=UTF-8'} //cabeçalho da requisição avisando que é do tipo JSON
    }).then(
        alert("Card cadatrado com sucesso")
    ).catch(
        alert("Não foi possível cadastrar o card")
    )
    }

    consulta = async (placeToAddInnerHtml) => {
    let cards = await fetch('http://localhost:8080/card')
    .then (response => {
        return response.json() 
    })
    .catch(error => {
        alert('Problema na consulta')
    })
    let dadosDaTabela = '';
    cards.map(card => {
        dadosDaTabela += `<tr> <td> ${card.curso} </td> <td> ${card.nome} </td><td> ${card.descricao} </td><td> <i onClick="remove(${card.id})" class="bi bi-trash-fill"></i> </td> <td> <i onClick="atualiza(${card.id}, '${card.nome}', '${card.descricao}', '${card.curso}')"class="bi bi-pencil-fill"></i> </td> </tr>`
    })

    placeToAddInnerHtml.innerHTML = dadosDaTabela; 
    }
    
}