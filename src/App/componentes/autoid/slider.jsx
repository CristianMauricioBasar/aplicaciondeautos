import React, {Component} from 'react'
import './slider.css'
import {ReactComponent as Iconoflechaisquierda} from '../../imagenes/flechaisquierda.svg'
import {ReactComponent as Iconoflechaderecha} from '../../imagenes/flechaderecha.svg'
import urlstorage from '../../urlstorage'

class Slider extends Component{
  _montado = false

  state = {
    cargado: null,
    infoamostar: null,
    intervaloid: null,
    autoplay: null
  }

  componentDidMount(){
    this._montado = true

    if(this._montado){
      this.setState({
          ...this.state,
          cargado: true,
          autoplay: true,
          infoamostar: 0,
      })
    }

    let intervaloid = setInterval(() => {
      if(this.state.autoplay){
        this.flechaderecha()
      }
    }, 2000)

    setTimeout(() => {
      if(this._montado){
        this.setState({
            ...this.state,
            intervaloid: intervaloid
        })
      }
    }, 1000)
  }

  sliderautoplay = () =>{
    if(this._montado){
      this.setState({
          ...this.state,
          autoplay: true
      })
    }
  }

  sliderplaystop = () =>{
    setTimeout(() => {
      if(this._montado){
        this.setState({
            ...this.state,
            autoplay: null
        })
      }
    }, 1000)
  }

  componentWillUnmount(){
    this._montado = false
    clearInterval(this.state.intervaloid)
  }

  flechaderecha = () =>{
    const {infoamostar, cargado} = this.state
    const {infoslider} = this.props
    if(cargado){
      if(Object.entries(infoslider).length > 0){
        let infos = parseInt(Object.entries(infoslider).length)

        if(infoamostar + 1 === infos || infoamostar === infos){
          if(this._montado){
            this.setState({
                ...this.state,
                infoamostar: 0
            })
          }
        }else if(infoamostar + 1 < infos){
          if(this._montado){
            this.setState({
                ...this.state,
                infoamostar: infoamostar + 1
            })
          }
        }

      }
    }
  }

  flechaisquierda = () =>{
    const {infoamostar, cargado} = this.state
    const {infoslider} = this.props
    if(cargado){
      if(Object.entries(infoslider).length > 0){
        let infos = parseInt(Object.entries(infoslider).length)

        if(infoamostar === 0){
          if(this._montado){
            this.setState({
                ...this.state,
                infoamostar: infos - 1
            })
          }
        }else if(infoamostar === infos - 1){
          if(this._montado){
            this.setState({
                ...this.state,
                infoamostar: infoamostar - 1
            })
          }
        }else if(infoamostar < infos - 1){
          if(this._montado){
            this.setState({
                ...this.state,
                infoamostar: infoamostar - 1
            })
          }
        }

      }
    }
  }

  render(){
    const {cargado, infoamostar} = this.state
    const {infoslider} = this.props
    let infosliderlista = null

    if(cargado){
      if(Object.entries(infoslider).length > 0){
        infosliderlista = Object.entries(infoslider).map(([key, info]) => {
          if(infoamostar === parseInt(key)){
            return <li key={key}>
            <img src={`${urlstorage}/autos/slider/${info.imagen}`} alt={info.titulo} />
            <h3>{info.titulo}</h3>
            <p>{info.descripcion}</p>
            </li>
          }else{
            return null
          }
        })
      }
    }


    if(cargado){
      if(Object.entries(infoslider).length > 0){
        return(
          <div className="slider">
            <ul onMouseEnter={this.sliderplaystop} onMouseLeave={this.sliderautoplay}>
              {infosliderlista}

              <div className="flechaisquierda" onClick={this.flechaisquierda}>
               <Iconoflechaisquierda className="iconoflechaisquierda" />
              </div>

              <div className="flechaderecha" onClick={this.flechaderecha}>
               <Iconoflechaderecha className="iconoflechaderecha" />
              </div>
            </ul>
          </div>
        )
      }
    }else{
      return(
        <div className="slider">
        <div className="cargando">Cargando Slider</div>
        </div>
      )
    }
  }

}

export default Slider
