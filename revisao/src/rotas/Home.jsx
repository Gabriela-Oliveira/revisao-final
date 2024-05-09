import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Pagina inicial</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/usuario">Usuário</Link>
                    </li>
                </ul>
            </nav>

            {/* <p>Sobre</p>
            <p>Usuário</p> */}
        </div>
    );
}

export default Home

