import React, { Component } from 'react';
import './../../style.css'
import Busca from '../../components/buscar/index'
import { Link } from 'react-router-dom'


class Perfil extends Component {


  constructor(props) {
    super(props)
    this.state = {
      perfil: '',
      gitHubApi: '',
      status: false
    }


    this.pegaValor = this.pegaValor.bind(this)
    this.trocou = this.trocou.bind(this)
    this.procurar = this.procurar.bind(this)

  }

  pegaValor(e) {
    this.setState({
      perfil: e.target.value,
    });
  }

  trocou(e) {
    console.log("ihi")
    console.log(this.state.gitHubApi.name)
    e.preventDefault()
  }


  procurar() {
    let valorPerfil = this.state.perfil
    let url = 'https://api.github.com/users/' + valorPerfil
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        let state = this.state
        state.gitHubApi = json;
        this.setState(state);
      })
    console.log(url)
    console.log(this.state.status)
    this.setState({ status: true })
  }


  render() {
    return (
      <div className='cont'>

        <div>
          <h1>Buscar Perfil</h1>
          <Link className='linkP' to='/'>Voltar para Home</Link><br />

          <form action="" onSubmit={this.trocou}>
            <label>Digite o perfil procurado:
                        <input type="text" value={this.state.perfil} onChange={this.pegaValor} />
            </label>
            <input type="submit" onClick={this.procurar} value="Buscar" />
          </form>
          <div className='perfil'></div>
          {this.state.gitHubApi.id &&
            <Busca nome={this.state.gitHubApi.name} foto={this.state.gitHubApi.avatar_url}
              perfil={this.state.gitHubApi.login} bio={this.state.gitHubApi.bio} link={this.state.gitHubApi.html_url}></Busca>
          }
        </div>
      </div>
    );

  }

}

export default Perfil;
