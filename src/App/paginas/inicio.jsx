import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './inicio.css'

class Inicio extends Component{
  _montado = false

  state = {
  }

  componentDidMount() {
    this._montado = true
    this.props.titulo.innerHTML = "Inicio - Cristian Basar"
    this.props.htmlscroll.scrollTop = 0
  }

  componentDidUpdate() {
  }

  render(){
    const {alto, listadeautos, listafiltrarpor, listaordenarpor} = this.props
    let autos = null
    let listafiltrar = null
    let listaordenar = null

    if(Object.entries(listadeautos).length > 0){
      autos = Object.entries(listadeautos).map(([key, auto]) => {
        return <article key={key}>
          <h2>{auto.titulo}</h2>
          <ul>
            <li>{auto.modelo}</li>
            <li>${auto.precio}</li>
          </ul>
          <img src={auto.imagen} alt={auto.titulo}/>
          <div><span><Link to={`/auto/${auto.id}`}>Ver Modelo</Link></span></div>
        </article>
      })
    }

    if(Object.entries(listafiltrarpor).length > 0){
      listafiltrar = Object.entries(listafiltrarpor).map(([key, filtrar]) => {
        return <li key={key}>
          <Link to="#">{filtrar.nombre}</Link>
        </li>
      })
    }

    if(Object.entries(listaordenarpor).length > 0){
      listaordenar = Object.entries(listaordenarpor).map(([key, ordenar]) => {
        return <li key={key}>
          <Link to="#">{ordenar.nombre}</Link>
        </li>
      })
    }

    return(
      <div className="inicio" style={{ margin: `${alto}px 0 0 0` }}>
        <h1>Descubri todos los modelos</h1>
        <nav>
          <details className="filtrar">
            <summary>Filtrar Por</summary>
            <ul>
              {listafiltrar}
            </ul>
          </details>

          <div>
            <ul>
              {listafiltrar}
            </ul>
          </div>

          <details className="ordenar">
            <summary>Ordenar Por</summary>
            <ul>
              {listaordenar}
            </ul>
          </details>
        </nav>

        <section>
          {autos}
        </section>
      </div>
    )
  }

}

export default Inicio
