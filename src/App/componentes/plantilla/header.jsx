import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import './header.css'
import logo from '../../imagenes/logo.png'
import {ReactComponent as Menuicono} from '../../imagenes/menu.svg'
import {ReactComponent as Menucerraricono} from '../../imagenes/menucerrar.svg'
import Inicio from '../../paginas/inicio'
import Autoid from '../../paginas/autoid'

const Header = ({
  headeralto,
  alto,
  abrirmenu,
  cerrarmenu,
  menuabierto,
  listadeautos,
  listafiltrarpor,
  listaordenarpor,
  titulo,
  htmlscroll
}) => {
  let menu = null

  if(menuabierto){
    menu = <div onClick={cerrarmenu} className="menuicono"><Menucerraricono /></div>
  }else{
    menu = <div onClick={abrirmenu} className="menuicono"><Menuicono /></div>
  }

  return(
    <BrowserRouter>
      <header className="header" ref={headeralto}>
        <div className="logo"><Link to="/"><img src={logo} alt="Logo" /></Link></div>
        <nav>
          <ul>
            <li><Link to="/">Modelos</Link></li>
            <li><Link to="#">Ficha del Modelo</Link></li>
          </ul>
        </nav>
        {menu}
      </header>
      <Switch>
        <Route exact path="/" render={() => <Inicio htmlscroll={htmlscroll} titulo={titulo} alto={alto} listadeautos={listadeautos} listafiltrarpor={listafiltrarpor} listaordenarpor={listaordenarpor}/>}/>
        <Route exact path="/auto/:id" render={(idauto) => <Autoid id={idauto} alto={alto} htmlscroll={htmlscroll} listadeautos={listadeautos} titulo={titulo}/>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Header
