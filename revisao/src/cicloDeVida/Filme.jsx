/* eslint-disable react/jsx-key */
import React from "react";

class FilmeApi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: "Jardim Secreto",
            listaFilmes: []
        }
    }

    obj = {
        id: 5,
        nome: "papai noel"
    }

    componentDidMount(){
        this.getFilmes();
        this.posFilmes(this.obj);
        this.putFilmes();
        this.deleteFilmes(1);
    }

    // Requisição pegar
    getFilmes = async () => {
        const resultado = await fetch('http://localhost:3000/filmes')

        this.setState({listaFilmes: await resultado.json()});
    }

    // Requisição criar
    posFilmes = async (obj) => {
        await fetch('http://localhost:3000/filmes', {
            method: 'POST',
            body: JSON.stringify(
                obj
            )
        })
    }

    // Requisição editar
    putFilmes = async () => {
        await fetch('http://localhost:3000/filmes/' + "3", {
            method: 'PUT',
            body: JSON.stringify(
                {
                    nome: "Batatinha frita 123"
                }
            )
        })
    }

    // Requisição deletar
    deleteFilmes = async (id) => {
        await fetch('http://localhost:3000/filmes/' + id, {
            method: 'DELETE'
        })
    }

    render() {
        return (
            <div>
                {this.state.listaFilmes.map(filme => <div>{filme.nome}</div>)}
            </div>
        )
    }
}

export default FilmeApi