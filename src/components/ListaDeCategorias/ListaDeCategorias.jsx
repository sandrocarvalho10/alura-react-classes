import React, { Component } from "react";
import './estilo.css'

class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]}

        this._novasCategorias = this._novasCategorias.bind(this)
    }

    //ciclo de vida 
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }  

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }    

    //componentDidUpdate espera uma mudança de estado
    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }

    _handleEventonInput(e) {
        if (e.key == "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria)
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li className="lista-categorias_item" key={index}>{categoria}</li>

                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventonInput.bind(this)}
                />
            </section>
        )
    }
}

export default ListaDeCategorias;