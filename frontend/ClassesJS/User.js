class User {
    constructor (name, login, password, meta_id) {
        this.name = name;
        this.login = login;
        this.password = password;
        this.meta_id = meta_id;
    }

    cadastrar = async () => {
        await fetch('http://localhost:8080/usuario/cadastro', {
        method: "POST",
        body: JSON.stringify(this.getUser()),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then(response => {
            alert("Welcome to the game")
        }).catch( error => {
            alert("Faz as coisas direito muleke")
        })
    }

    getUserFromDatabase = async (login) => {
        return await fetch (`http://localhost:8080/usuario/${login}`)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return null;
        })
    }

    confirmLogin = async() => {
        if(await this.validateLogin()){
            alert(`Seja bem vindo ${this.login}`)
            window.location.href = "../arquivosHTML/index.html";
        }
           console.log(this.validateLogin())
    }

    validateLogin = () => {
        if(this.isSet(this.login) && this.isSet(this.password)){
            let user = this.getUserFromDatabase(this.login);
            return user.then(response => {
                if(response == null){
                    return false
                }else{
                    return ((response.login == this.login) && (response.password == this.password)) ? true : false; 
                }
            })
        }
        console.log('não')
    }

    isSet(value){
        return (value == undefined || value == null || value == false || value == "") ? false : true
    }

    getUser = () => {
        return {name: this.name, login: this.login, password: this.password, meta_ID: this.meta_id}
    }
}