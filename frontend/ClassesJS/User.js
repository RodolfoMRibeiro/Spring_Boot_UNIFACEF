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

    login = () => {
        
    }
    validateLogin = () => {
        let user = this.getUserFromDatabase(this.login);
        if(user != null) {
            user.then(response => {
                return ((response.login == this.login) && (response.password == this.password)) ? true : false;
            })
        }
    }


    getUser = () => {
        return {name: this.name, login: this.login, password: this.password, meta_ID: this.meta_id}
    }
}