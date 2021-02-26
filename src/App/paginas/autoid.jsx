import React, {Component} from 'react'
import './autoid.css'
import Slider from '../componentes/autoid/slider'
import urlstorage from '../urlstorage'

class Autoid extends Component{
  _montado = false

  state = {
    auto: null
  }

 componentDidMount(){
   this._montado = true
   this.props.htmlscroll.scrollTop = 0

   if(Object.entries(this.props.listadeautos).length > 0){
     for(let auto of Object.entries(this.props.listadeautos)){
       if(parseInt(this.props.id.match.params.id) === parseInt(auto[1].id)){
         if(this._montado){
           this.setState({
             ...this.state,
             auto: auto[1]
           })
         }
         this.props.titulo.innerHTML = `Nuevo ${auto[1].titulo} ${auto[1].modelo}`
       }
     }
   }
 }

 componentWillUnmount(){
   this._montado = false
 }


  render(){
    const {auto} = this.state
    const {alto} = this.props
    let listaimagenes = null

    if(auto){
      listaimagenes = Object.entries(auto.datosimagenes).map(([key, dato]) => {
        return <li key={key}>
          <img src={`${urlstorage}/autos/imagenes/${dato.imagen}`} alt={dato.titulo}/>
          <div className="detalles2">
            <h2>{dato.titulo}</h2>
            <p>{dato.descripcion}</p>
          </div>
        </li>
      })
    }

    if(auto){
      return(
        <section className="autoid" style={{ margin: `${alto}px 0 0 0` }}>
          <article>
            <img src={`${urlstorage}/autos/${auto.imagen}`} alt={auto.titulo}/>
            <div className="detalles">
              <h1>{auto.titulo}</h1>
              <h2>Nuevo {auto.titulo} {auto.modelo}</h2>
              <p>{auto.descripcion}</p>
            </div>
            <Slider infoslider={auto.datosslider}/>
            <ul className="listaimagenes">{listaimagenes}</ul>
          </article>
        </section>
      )
    }else{
      return(
        <div className="autoid">
        <div className="cargando">Cargando Auto</div>
        </div>
      )
    }
  }


}

export default Autoid
