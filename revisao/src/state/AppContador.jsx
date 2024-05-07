import React from "react";

class Contador extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        }
    }

    // contador = 0

    anterior = () => {
        // this.contador--
        this.setState({contador: this.state.contador - 1})
    }

    posterior = () => {
        // this.contador++
        this.setState({contador: this.state.contador + 1})
    }

    render(){
        return(
            <div style={{display: "flex"}}>
                <button onClick={this.anterior} style={{margin: "20px"}}>Anterior</button>
                <h3 style={{margin: "20px"}}>{this.state.contador}</h3>
                <button onClick={this.posterior} style={{margin: "20px"}}>Posterior</button>
            </div>
        )
    }
}

export default Contador;