class Meta {
    constructor (id) {
        this.id = id;
    }

    adicionarMetaEscolhida = async () => {
        await fetch ('http://localhost:8080/metas', {
            method: "PUT",
            body: JSON.stringify({metaID: parseInt(this.id)}),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then(response => {
            console.log("meta alterada com sucesso")
        }).catch(error => {
            console.log('deu ruim, tente novamente')
        })
    }
}