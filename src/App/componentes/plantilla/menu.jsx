import React from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import './menu.css'

const Menu = ({
  alto,
  menuabierto,
  listacategorias
}) => {
  let listacategoria = null

  if(Object.entries(listacategorias).length > 0){
    listacategoria = Object.entries(listacategorias).map(([key, categoria]) => {
      return <li key={key}>
        <h3><Link to="#">{categoria.nombre}</Link></h3>
      </li>
    })
  }

  if(menuabierto){
    return(
      <div className="menu" style={{ top: `${alto}px` }}>
        <BrowserRouter>
        <ul>
          {listacategoria}
        </ul>
      </BrowserRouter>
      </div>
    )
  }else{
    return null
  }
}

export default Menu
