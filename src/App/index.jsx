import React, {Component} from 'react'
import Plantilla from './plantilla'

class App extends Component{
  _montado = false

  state = {
  }

  componentDidMount(){
    this._montado = true
  }

  componentWillUnmount(){
    this._montado = false
  }

  render(){
    return(
      <div>
      <Plantilla />
      </div>
    )
  }
}


export default App
