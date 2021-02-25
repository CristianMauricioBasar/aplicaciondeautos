import React, {Component} from 'react'
import Header from './componentes/plantilla/header'
import Menu from './componentes/plantilla/menu'
import Footer from './componentes/plantilla/footer'
import auto from './imagenes/1.png'

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
    listacategorias: {
      0:{
        "nombre": "categoria1"
      },
      1:{
        "nombre": "categoria2"
      },
      2:{
        "nombre": "categoria3"
      },
      3:{
        "nombre": "categoria4"
      },
      4:{
        "nombre": "categoria5"
      },
      5:{
        "nombre": "categoria6"
      },
      6:{
        "nombre": "categoria7"
      },
      7:{
        "nombre": "categoria8"
      },
      8:{
        "nombre": "categoria9"
      },
      9:{
        "nombre": "categoria10"
      }
    },
    listafiltrarpor: {
      0:{
        "nombre": "filtro1"
      },
      1:{
        "nombre": "filtro2"
      },
      2:{
        "nombre": "filtro3"
      },
      3:{
        "nombre": "filtro4"
      }
    },
    listaordenarpor: {
      0:{
        "nombre": "ordenar1"
      },
      1:{
        "nombre": "ordenar2"
      },
      2:{
        "nombre": "ordenar3"
      },
      3:{
        "nombre": "ordenar4"
      }
    },
    listadeautos: {
      0:{
        "titulo": "auto1",
        "modelo": 2019,
        "precio": 9920384,
        "imagen": auto,
        "descripcion": "enoid wediewdnweweoidwe cweicw ciowedwei wedoiwe cecoiwec wecoiec wecoeic ecoiwec wecowie",
        "datosslider": {
          0: {
            "titulo": "ifjfiofjoff",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "datosimagenes": {
          0: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "id": 1
      },
      1:{
        "titulo": "auto2",
        "modelo": 2019,
        "precio": 9920384,
        "imagen": auto,
        "descripcion": "enoid wediewdnweweoidwe cweicw ciowedwei wedoiwe cecoiwec wecoiec wecoeic ecoiwec wecowie",
        "datosslider": {
          0: {
            "titulo": "ifjfiofjoff",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "datosimagenes": {
          0: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "id": 2
      },
      2:{
        "titulo": "auto3",
        "modelo": 2019,
        "precio": 9920384,
        "imagen": auto,
        "descripcion": "enoid wediewdnweweoidwe cweicw ciowedwei wedoiwe cecoiwec wecoiec wecoeic ecoiwec wecowie",
        "datosslider": {
          0: {
            "titulo": "ifjfiofjoff",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "datosimagenes": {
          0: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "id": 3
      },
      3:{
        "titulo": "auto4",
        "modelo": 2019,
        "precio": 9920384,
        "imagen": auto,
        "descripcion": "enoid wediewdnweweoidwe cweicw ciowedwei wedoiwe cecoiwec wecoiec wecoeic ecoiwec wecowie",
        "datosslider": {
          0: {
            "titulo": "ifjfiofjoff",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "datosimagenes": {
          0: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "id": 4
      },
      4:{
        "titulo": "auto5",
        "modelo": 2019,
        "precio": 9920384,
        "imagen": auto,
        "descripcion": "enoid wediewdnweweoidwe cweicw ciowedwei wedoiwe cecoiwec wecoiec wecoeic ecoiwec wecowie",
        "datosslider": {
          0: {
            "titulo": "ifjfiofjoff",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "datosimagenes": {
          0: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "id": 5
      },
      5:{
        "titulo": "auto6",
        "modelo": 2019,
        "precio": 9920384,
        "imagen": auto,
        "descripcion": "enoid wediewdnweweoidwe cweicw ciowedwei wedoiwe cecoiwec wecoiec wecoeic ecoiwec wecowie",
        "datosslider": {
          0: {
            "titulo": "ifjfiofjoff",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "datosimagenes": {
          0: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          },
          1: {
            "titulo": "ifjfiofjoff  fewi ko foew",
            "imagen": auto,
            "descripcion": "c dsijcsd cdscisd cdscisdc dscisdc sdcisdc sdcisdcsd  icsdc sdcsidcsdcsd cids"
          }
        },
        "id": 6
      },
    }
  }

  componentDidMount() {
    this._montado = true

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
