/* eslint-disable react/prop-types */
function Filmes(props) {
    return(
        <div>
            <h1>Filmes</h1>
            <p>{props.genero} {'=>'} {props.titulo}</p>
            <p>{props.genero} {'=>'} {props.titulo}</p>
            <hr />
        </div>
    )
}

export default Filmes;