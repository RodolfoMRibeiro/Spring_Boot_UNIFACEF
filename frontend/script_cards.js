// esta função deve ser assíncrona - async, pois quem a chamou pode 
// executar outras tarefas enquanto não recebeu resposta do servidor
cadastrar = async () => {
    // vamos montar cards com os dados digitados no form pelo usuário
    let id = document.getElementById("id").value
    let card
    let verbo
    if (id){ // será atualização
        card = {
            id: id,
            nome: document.getElementById("nome").value,
            tipo: document.getElementById("tipo").value,
            poder: document.getElementById("poder").value,
            nota: Number(document.getElementById("nota").value)
        }
        verbo = 'PUT'
    }
    else {
        // será cadastro
        card = {
            nome: document.getElementById("nome").value,
            tipo: document.getElementById("tipo").value,
            poder: document.getElementById("poder").value,
            nota: Number(document.getElementById("nota").value)
        }
        verbo = 'POST'
    }
    
    // aguarda a resposta do servidor, e não faz nada enquanto isto
    await fetch('http://localhost:8080/card', {
        method: verbo, // vamos inserir, portanto o método é POST
        body: JSON.stringify(card), // dado json convertido para string
        headers: {'Content-Type': 'application/json; charset=UTF-8'} //cabeçalho da requisição avisando que é do tipo JSON
    })
    .then(response => { // quando a resposta for retornada ...
        alert('Card cadastrado com sucesso')
    })
    .catch(error => { // veio um erro de resposta do servidor ...
        alert('Problema na inserção')
    })
    consulta() // atualiza a tabela, consultando o servidor de api
}

// função para consultar os card no servidor de api
// deve ser assíncrona
/*consulta = async () => {
    // busca e chama a api
    let cards = await fetch('http://localhost:8080/card')
    .then (response => {
        // retorna os dados vindos do servidor em json para a variável cards
        return response.json() 
    })
    .catch(error => {
        alert('Problema na consulta')
    })
    // percorre card e alimentar a tabela
    let saida = '' // vai conter todas as linhas da tabela
    cards.map(card => {
        saida += `<tr> <td> ${card.nome} </td> <td> ${card.tipo} </td><td> ${card.poder} </td> <td> ${card.nota}</td> <td>          <i onClick="remove(${pokemon.id})" class="bi bi-trash-fill"></i> </td> <td> <i onClick="atualiza(${pokemon.id}, '${pokemon.nome}', '${pokemon.tipo}', '${pokemon.poder}', ${pokemon.nota})"class="bi bi-pencil-fill"></i> </td> </tr>`
    })
    // colocar saida em corpoTabela
    document.getElementById('corpoTabela').innerHTML = saida
}

remove = async (id) => {
    let confirma = confirm(`Confirma a exclusão do card com código ${id}`)
    if (confirma){ // quer remover
        await fetch(`http://localhost:8080/card/${id}`, {
            method: 'DELETE'
        }
        )
        .then( response => {
            alert(`Remoção realizada com sucesso`)
        })
        .catch( error => {
            alert(`Serviço indisponível`)
        })
        // atualiza a tabela com os card
        consulta()
    }
}

atualiza = (id, nome, tipo, poder, nota) => {
    // vamos pegar os valores dos parâmetros e jogar no formulário web
    document.getElementById("id").value = id
    document.getElementById("nome").value = nome
    document.getElementById("tipo").value = tipo
    document.getElementById("poder").value = poder
    document.getElementById("nota").value = nota
}
*/