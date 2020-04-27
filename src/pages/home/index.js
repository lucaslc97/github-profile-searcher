import React, { Component } from 'react';
import './../../style.css'
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div className='cont'>
        <div className='home'>
          <i class="fab fa-github fa-8x"></i>
          <h1>Olá,</h1>
          <p>Seja muito bem vindo ao Buscador de perfis e repositorios do Github.</p>
          <p>Este site foi criado por <a href='https://www.google.com/'>Lucas Cabral</a> Contruído com React o buscador tem como intuito apenas o aprendizado :)</p>
          <nav>

            <Link className='link' to='/perfil'>Perfil</Link>
            <Link className='link' to='/repositorio'>Repositorios</Link>


          </nav>

        </div>
       </div>
      
      
    );

  }

}

export default Home;
