import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import Repositorio from './pages/repositorio/index'
import Perfil from './pages/perfil/index'
import Home from './pages/home/index'
import Error from './pages/Error/index'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/repositorio' component={Repositorio}></Route>
                <Route path='/perfil' component={Perfil}></Route>
                <Route path='*' component={Error}></Route>
            </Switch>
        </BrowserRouter>
    );

};

export default Routes