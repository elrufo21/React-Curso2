import { Component } from "react";
function EstadoA(props){
    return(
        <div>
            <h3>{props.EstadoA} </h3>

        </div>
    )
}
export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,

        }
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000);
        
        
    }

    render() {
        return (
            <div>
                <h1>El estado</h1>
                <p>{this.state.contador} </p>
                <EstadoA EstadoA={this.state.contador} />
            </div>
        )
    }
}