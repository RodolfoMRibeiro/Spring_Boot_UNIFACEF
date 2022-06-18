class Card {

    constructor(id,titulo, descricao, materia) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.materia = materia;
    }

    cadastrar = async () => {
        await fetch('http://localhost:8080/card', {
        method: "POST",
        body: JSON.stringify(this.getCard()),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then(response => {
            alert("Card cadatrado com sucesso")
        }).catch( error => {
            alert("Não foi possivel cadastrar o card")
        })

        this.consulta(document.querySelector('#corpoTabela'))
    }

    /*
    * corrigir a função atualizar
    */
    atualizar = async (cardToUpdate) => { 
        await fetch('http://localhost:8080/card', {
        method: "PUT",
        body: JSON.stringify(cardToUpdate),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then(response => {
            alert(JSON.stringify(this.getCard()))
        }).catch(error => {
            alert("Não foi possível atualizar o card informado")
        })
    }

    consulta = async (whereToAddInnerHtml) => {
        let cards = await fetch('http://localhost:8080/card/consulta')
        .then (response => {
            return response.json()
        })
        .catch(error => {
            alert('Problema na consulta')
        })
        let dadosDaTabela = '';
        cards.map(card => {
            dadosDaTabela += `<tr> <td> ${card.titulo} </td> <td> ${card.descricao} </td><td> ${card.materia} </td><td> <i onClick="new Card().remover(${card.id})" class="bi bi-trash-fill"></i> </td> <td> <i onClick="new Card().atualizar(${card})"class="bi bi-pencil-fill"></i> </td> </tr>`
        })

        whereToAddInnerHtml.innerHTML = dadosDaTabela; 
    }

    remover = async (id) => {
        let confirmacao = confirm(`Deseja remover o card de id: ${id}`);
        if(confirmacao){
            await fetch(`http://localhost:8080/card/${id}`,{
                method: 'DELETE'
            }).then((response) => {
                alert('Card excluído com sucesso')
            }).catch((error) => {
                alert('Não foi possível realizar a exclusão do card')
            })
        }
    }

    getCard = () => {
        return this.id == false ? {titulo: this.titulo, descricao: this.descricao, materia: this.materia} : {id: this.id, titulo: this.titulo, descricao: this.descricao, materia: this.materia}
    }
    
}