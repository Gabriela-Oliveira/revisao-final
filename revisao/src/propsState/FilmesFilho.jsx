/* eslint-disable react/prop-types */
function FilmesFilho(props) {

    return (
        <div>
            <h1>Digite o título do filmes</h1>
            <input type="text" onChange={props.funcaoaManipulaTitulo}/>
            <p>{props.tituloFilme}</p>
        </div>
    )
}

export default FilmesFilho;