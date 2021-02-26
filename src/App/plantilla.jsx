import React, {Component} from 'react'
import Header from './componentes/plantilla/header'
import Menu from './componentes/plantilla/menu'
import Footer from './componentes/plantilla/footer'
import url from './url'

class Plantilla extends Component{
  _montado = false

  constructor(props){
    super(props)
    this.headeralto = React.createRef()
    this.titulo = document.getElementsByTagName("title")[0]
    this.htmlscroll = document.getElementsByTagName("html")[0]
  }

  state = {
    header: {
      menuabierto: null,
      alto: null
    },
    listacategorias: {},
    listafiltrarpor: {},
    listaordenarpor: {},
    listadeautos: {}
  }

  componentDidMount() {
    this._montado = true

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify()
    }

    fetch(`${url}/datos`, config)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(respuesta => {
      if(this._montado){
        this.setState({
          ...this.state,
          listacategorias: respuesta.listacategorias,
          listafiltrarpor: respuesta.listafiltrarpor,
          listaordenarpor: respuesta.listaordenarpor,
          listadeautos: respuesta.listadeautos
        })
      }
    })
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
    this._montado = false
  }

  abrirmenu = () => {
    if(this._montado){
      this.setState({
        ...this.state,
        header: {
          ...this.state.header,
          menuabierto: true
        }
      })
    }
  }

  cerrarmenu = () => {
    if(this._montado){
      this.setState({
        ...this.state,
        header: {
          ...this.state.header,
          menuabierto: null
        }
      })
    }
  }

  render(){
    const {menuabierto, alto} = this.state.header
    const {listadeautos, listafiltrarpor, listaordenarpor, listacategorias} = this.state

    setTimeout(() => {
      if(this._montado){
        this.setState({
            ...this.state,
            header: {
              ...this.state.header,
              alto: this.headeralto.current.clientHeight
            }
        })
      }
    }, 100)

    return(
      <div>
        <Header
          titulo={this.titulo}
          htmlscroll={this.htmlscroll}
          headeralto={this.headeralto}
          alto={alto}
          abrirmenu={this.abrirmenu}
          cerrarmenu={this.cerrarmenu}
          menuabierto={menuabierto}
          listadeautos={listadeautos}
          listafiltrarpor={listafiltrarpor}
          listaordenarpor={listaordenarpor}
        />
        <Menu
          alto={alto}
          menuabierto={menuabierto}
          listacategorias={listacategorias}
        />

        <Footer />
      </div>
    )
  }

}

export default Plantilla
