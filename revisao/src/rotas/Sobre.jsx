import { Link, useParams } from "react-router-dom";

const Sobre = () => {
    let { sobre } = useParams()
    return(
        <div>
            <h1>Sobre</h1>
            <p>O parâmetro é: {sobre}</p>
            <Link to="/">Voltar</Link>
        </div>
    )
}

export default Sobre;