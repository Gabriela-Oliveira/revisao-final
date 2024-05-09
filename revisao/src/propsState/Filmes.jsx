import React from 'react';
import FilmesFilho from './FilmesFilho'

class Filmes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tituloFilme: ""
        }
    }

    manipulaTituloFilme = (evento) => {
        this.setState({tituloFilme: evento.target.value})
    }

    render() {
        return (
            <div>
                <FilmesFilho tituloFilme={this.state.tituloFilme} funcaoaManipulaTitulo={this.manipulaTituloFilme}/>
            </div>
        );
    }
}

export default Filmes;