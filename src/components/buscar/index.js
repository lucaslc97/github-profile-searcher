import React, { Component } from 'react';
import './../../style.css'


class Busca extends Component {



  constructor(props) {
    super(props)
    this.state = {
      buscaPerfil: ' '
    }

  }

  render() {


    return (
      <div className="perfil-filho">
        <div>
          <img src={this.props.foto} alt="" />
        </div>
        <article>
          <h2>Nome: {this.props.nome}</h2>
          <h3>Nickname: {this.props.perfil}</h3>
          <p>Bio: {this.props.bio}</p>
          <a href={this.props.link}>Entrar no perfil</a>
        </article>

      </div>
    );



  }

}

export default Busca;
